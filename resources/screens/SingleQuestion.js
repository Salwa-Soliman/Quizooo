/* eslint-disable prettier/prettier */
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Center, VStack, HStack, Skeleton, Box, View} from 'native-base';
import {COLORS, SIZES} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SingleQuestion() {
  const [allQuestions, setallQuestions] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const route = useRoute();
  const {quizCode, quizName} = route.params;
  console.log(quizCode);
  const getQuestions = () => {
    return fetch(`https://jsonkeeper.com/b/${quizCode}`)
      .then(response => response.json())
      .then(json => {
        setallQuestions(json);
        setDataFetched(true);
      })
      .catch(error => {
        console.error(error);
      });
  };


  useEffect(() => {
    getQuestions();
  }, []);

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 25,
          backgroundColor: COLORS.accent,
          borderRadius: 25,
          padding: 10,
        }}>
        {/* Question Counter */}

        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}>
            {currentQuestionIndex + 1}
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
              opacity: 0.6,
              marginRight: 2,
            }}>
            {' '}
            /{allQuestions.length}
          </Text>
        </View>

        {/* Question */}

        <Text style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };

  const validateAnswer = selectedOption => {
    let correct_option = allQuestions[currentQuestionIndex]['answer'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);

    if (selectedOption == correct_option) {
      //Set score
      setScore(score + 1);
    }

    //Show next button

    setShowNextButton(true);
  };



  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      //last question
      
      //send score to firebase

      AsyncStorage.getItem('email').then((email) => {
        firestore()
        .collection('Scores')
        .add({
          email: email,
          score: score,
          quiz: quizName
        })
        .then(() => {
          console.log('User added!');
        });
      })
      
      
      //show score modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const restartQuiz = () => {
    setShowScoreModal(false);
    setCorrectOption(null);
    setCurrentOptionSelected(null);
    setIsOptionsDisabled(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map(option => (
          <TouchableOpacity
            disabled={isOptionsDisabled}
            key={option}
            onPress={() => validateAnswer(option)}
            style={{
              borderWidth: 3,
              borderColor:
                option == correctOption
                  ? COLORS.success
                  : option == currentOptionSelected
                  ? COLORS.error
                  : COLORS.secondary + '40',
              backgroundColor:
                option == correctOption
                  ? COLORS.success + '20'
                  : option == currentOptionSelected
                  ? COLORS.error + '20'
                  : COLORS.secondary + '40',
              height: 60,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginVertical: 10,
            }}>
            <Text style={{fontSize: 20, color: COLORS.white}}>{option}</Text>

            {/* Show right or wrong */}

            {option == correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.success,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="check"
                  style={{color: COLORS.white, fontSize: 20}}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.error,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="close"
                  style={{color: COLORS.white, fontSize: 20}}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: '100%',
            backgroundColor: COLORS.accent,
            padding: 20,
            borderRadius: 5,
          }}>
          <Text
            style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>
            Next
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%'],
  });

  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 20,
          borderRadius: 20,
          backgroundColor: '#00000020',
        }}>
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: COLORS.accent,
            },
            {width: progressAnim},
          ]}></Animated.View>
      </View>
    );
  };

  const renderModal = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={showScoreModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              width: '90%',
              borderRadius: 20,
              padding: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {score > allQuestions.length / 2 ? 'Congratulations' : 'Oops!!'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color:
                    score > allQuestions.length / 2
                      ? COLORS.success
                      : COLORS.error,
                }}>
                {score}
              </Text>
              <Text style={{fontSize: 20, color: COLORS.black}}>
                /{allQuestions.length}
              </Text>
            </View>

            {/* RetyQuizButton */}

            <TouchableOpacity
              onPress={restartQuiz}
              style={{
                backgroundColor: COLORS.accent,
                padding: 20,
                width: '100%',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: COLORS.white,
                  fontSize: 20,
                }}>
                Rety Quiz
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      {dataFetched ? (
        <ScrollView
          style={{
            flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 16,
            backgroundColor: COLORS.background,
            position: 'relative',
          }}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={COLORS.primary}
          />

          {/* Progress bar */}
          {renderProgressBar()}

          {/* Question */}

          {renderQuestion()}

          {/* options */}
          {renderOptions()}

          {/* next button */}
          {renderNextButton()}

          {/* ShowScoreModal */}
          {renderModal()}

          {/* background image */}

          <Image
            source={require('../assets/images/24800-6-bubbles-transparent-image.png')}
            style={{
              zIndex: -1,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              opacity: 0.5,
            }}
            resizeMode={'contain'}
          />
          {/* </View> */}
        </ScrollView>
      ) : (
        <Center w="100%" h="100%">
          <VStack
            w="90%"
            maxW="400"
            borderWidth="1"
            space={8}
            overflow="hidden"
            rounded="md"
            _dark={{
              borderColor: 'coolGray.500',
            }}
            _light={{
              borderColor: 'coolGray.200',
            }}>
            <Skeleton h="40" />
            <Skeleton.Text px="4" />
            <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
          </VStack>
        </Center>
      )}
    </>
  );
}
