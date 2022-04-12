/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/self-closing-comp */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {NavigationContainer, useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Center,
  VStack,
  HStack,
  Skeleton,
  Box,
  View,
  IconButton,
} from 'native-base';
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
  ImageBackground,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors, Icon} from 'react-native-elements';
import {Colors} from '../ColorPalete/styles';
import StaggerComp from './Stagger';
import {firebase} from '@react-native-firebase/firestore';

export default function SingleQuestion({navigation}) {
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
  // console.log(quizCode);

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
          backgroundColor: Colors.blue300 + '40',
          borderRadius: 18,
          paddingHorizontal: 20,
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: Colors.blue300 + '90',
        }}>
        {/* Question Counter */}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginRight: 2,
              textAlign: 'center',
              paddingBottom: 5,
            }}>
            {currentQuestionIndex + 1}/{allQuestions.length}
          </Text>
        </View>

        {/* Question */}

        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
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

    if (selectedOption === correct_option) {
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

      AsyncStorage.getItem('email').then(email => {
        firestore()
          .collection('Scores')
          .add({
            email: email,
            score: score,
            quiz: quizName,
            date: firebase.firestore.FieldValue.serverTimestamp(),
          })
          // .doc(email)
          // .set(
          //   {
          //     email: email,
          //     score: score,
          //     quiz: quizName,
          //   },
          //   {merge: true},
          // )
          .then(() => {
            console.log('User added!');
          })
          .catch(e => console.log('failed to save grade'));
      });

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
              borderWidth: 2,
              borderColor:
                option === correctOption
                  ? COLORS.success
                  : option === currentOptionSelected
                  ? COLORS.error
                  : Colors.blue100 + '80',
              backgroundColor:
                option === correctOption
                  ? COLORS.success + '40'
                  : option === currentOptionSelected
                  ? COLORS.error + '40'
                  : Colors.blue100 + '30',
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
        <Center>
          <TouchableOpacity
            onPress={handleNext}
            style={{
              marginTop: 20,
              width: '50%',
              backgroundColor: Colors.mainColor + '40',
              paddingVertical: 15,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: Colors.mainColor + '60',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                textAlign: 'center',
                fontWeight: '600',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </Center>
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
          backgroundColor: Colors.blue100 + '40',
        }}>
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: Colors.mainColor + '60',
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
            backgroundColor: '#000000b0',
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
            <HStack alignItems={'center'}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color:
                    score > allQuestions.length / 2
                      ? Colors.orange300
                      : Colors.blue300,
                }}>
                {score > allQuestions.length / 2 ? 'Well Done!' : 'Oops!!'}
              </Text>
              {score > allQuestions.length / 2 ? (
                <Image
                  resizeMode="contain"
                  alt="congrats"
                  source={require('../assets/images/icons8-confetti-48.png')}
                />
              ) : null}
            </HStack>
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
              <Text
                style={{
                  fontSize: 23,
                  // color: Colors.blue300,
                  color: Colors.blue300,
                  fontWeight: '500',
                }}>
                /{allQuestions.length}
              </Text>
            </View>

            {/* RetyQuizButton */}
            <View
              style={{
                // width: 250,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('NavigationTabs');
                }}>
                <HStack
                  px="3"
                  alignItems={'center'}
                  bg={Colors.blue300 + 'df'}
                  borderRadius={'xl'}
                  borderWidth="2"
                  borderColor={Colors.blue300 + '50'}
                  h="12">
                  <Icon name="home" color={'#fff'} size={30} />
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 18,
                      paddingHorizontal: 4,
                    }}>
                    Home
                  </Text>
                </HStack>
              </TouchableOpacity>
              <TouchableOpacity onPress={restartQuiz}>
                <HStack
                  px="3"
                  alignItems={'center'}
                  bg={Colors.blue300 + 'df'}
                  borderRadius={'xl'}
                  borderWidth="2"
                  borderColor={Colors.blue300 + '50'}
                  h="12">
                  <Icon name="refresh" color={'#fff'} size={30} />
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 18,
                      paddingHorizontal: 4,
                    }}>
                    Retake
                  </Text>
                </HStack>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      resizeMode="cover"
      // blurRadius={2}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {dataFetched ? (
        <ScrollView
          style={{
            flex: 1,
            width: 400,
            paddingVertical: 40,
            paddingHorizontal: 20,
            position: 'relative',
          }}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />

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
      <StaggerComp navigation={navigation} />
    </ImageBackground>
  );
}
