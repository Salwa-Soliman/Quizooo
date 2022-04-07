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
// import {NavigationContainer, useRoute} from '@react-navigation/native';
// import React, {useState, useEffect} from 'react';
// import {Center, VStack, Skeleton, View} from 'native-base';
// import {COLORS} from '../constants';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {
//   Image,
//   StyleSheet,
//   StatusBar,
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
//   Modal,
//   Animated,
//   ScrollView,
//   ImageBackground,
// } from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Icon} from 'react-native-elements';
// import {Colors} from './../ColorPalete/styles';

// export default function SingleQuestion({navigation}) {
//   const [allQuestions, setallQuestions] = useState([]);
//   const [dataFetched, setDataFetched] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
//   const [correctOption, setCorrectOption] = useState(null);
//   const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
//   const [score, setScore] = useState(0);
//   const [showNextButton, setShowNextButton] = useState(false);
//   const [showScoreModal, setShowScoreModal] = useState(false);

//   const route = useRoute();
//   const {quizCode, quizName} = route.params;
//   console.log(quizCode);
//   const getQuestions = () => {
//     return fetch(`https://jsonkeeper.com/b/${quizCode}`)
//       .then(response => response.json())
//       .then(json => {
//         setallQuestions(json);
//         setDataFetched(true);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   useEffect(() => {
//     getQuestions();
//   }, []);

//   const renderQuestion = () => {
//     return (
//       <View
//         style={{
//           marginVertical: 25,
//           backgroundColor: Colors.main500 + 'bf',
//           borderRadius: 18,
//           paddingHorizontal: 20,
//           paddingVertical: 15,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         {/* Question Counter */}

//         <View
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 20,
//               marginRight: 2,
//               textAlign: 'center',
//               paddingBottom: 10,
//             }}>
//             {currentQuestionIndex + 1}/{allQuestions.length}
//           </Text>
//           {/* <Text
//             style={{
//               color: COLORS.white,
//               fontSize: 18,
//               opacity: 0.6,
//               marginRight: 2,
//             }}>
//             {' '}
//             /{allQuestions.length}
//           </Text> */}
//         </View>

//         {/* Question */}

//         <Text
//           style={{
//             color: COLORS.white,
//             fontSize: 20,
//             fontWeight: 'bold',
//             textAlign: 'center',
//           }}>
//           {allQuestions[currentQuestionIndex]?.question}
//         </Text>
//       </View>
//     );
//   };

//   const validateAnswer = selectedOption => {
//     let correct_option = allQuestions[currentQuestionIndex]['answer'];
//     setCurrentOptionSelected(selectedOption);
//     setCorrectOption(correct_option);
//     setIsOptionsDisabled(true);

//     if (selectedOption == correct_option) {
//       //Set score
//       setScore(score + 1);
//     }

//     //Show next button

//     setShowNextButton(true);
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex == allQuestions.length - 1) {
//       //last question

//       //send score to firebase

//       AsyncStorage.getItem('email').then(email => {
//         firestore()
//           .collection('Scores')
//           .add({
//             email: email,
//             score: score,
//             quiz: quizName,
//           })
//           .then(() => {
//             console.log('User added!');
//           });
//       });

//       //show score modal
//       setShowScoreModal(true);
//     } else {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setCurrentOptionSelected(null);
//       setCorrectOption(null);
//       setIsOptionsDisabled(false);
//       setShowNextButton(false);
//     }
//     Animated.timing(progress, {
//       toValue: currentQuestionIndex + 1,
//       duration: 1000,
//       useNativeDriver: false,
//     }).start();
//   };

//   const restartQuiz = () => {
//     setShowScoreModal(false);
//     setCorrectOption(null);
//     setCurrentOptionSelected(null);
//     setIsOptionsDisabled(false);
//     setCurrentQuestionIndex(0);
//     setScore(0);
//     setShowNextButton(false);
//     Animated.timing(progress, {
//       toValue: 0,
//       duration: 1000,
//       useNativeDriver: false,
//     }).start();
//   };

//   const renderOptions = () => {
//     return (
//       <View>
//         {allQuestions[currentQuestionIndex]?.options.map(option => (
//           <TouchableOpacity
//             disabled={isOptionsDisabled}
//             key={option}
//             onPress={() => validateAnswer(option)}
//             style={{
//               borderWidth: 3,
//               borderColor:
//                 option == correctOption
//                   ? COLORS.success
//                   : option === currentOptionSelected
//                   ? COLORS.error
//                   : Colors.main500 + '6f',
//               backgroundColor:
//                 option === correctOption
//                   ? COLORS.success + '9f'
//                   : option == currentOptionSelected
//                   ? COLORS.error + '9f'
//                   : Colors.main500 + '6f',
//               height: 60,
//               borderRadius: 20,
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               paddingHorizontal: 20,
//               marginVertical: 10,
//             }}>
//             <Text style={{fontSize: 20, color: '#fff'}}>{option}</Text>

//             {/* Show right or wrong */}

//             {option == correctOption ? (
//               <View
//                 style={{
//                   width: 30,
//                   height: 30,
//                   borderRadius: 30 / 2,
//                   backgroundColor: COLORS.success,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <MaterialCommunityIcons
//                   name="check"
//                   style={{color: COLORS.white, fontSize: 20}}
//                 />
//               </View>
//             ) : option == currentOptionSelected ? (
//               <View
//                 style={{
//                   width: 30,
//                   height: 30,
//                   borderRadius: 30 / 2,
//                   backgroundColor: COLORS.error,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <MaterialCommunityIcons
//                   name="close"
//                   style={{color: COLORS.white, fontSize: 20}}
//                 />
//               </View>
//             ) : null}
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   };

//   const renderNextButton = () => {
//     if (showNextButton) {
//       return (
//         <Center>
//           <TouchableOpacity
//             onPress={handleNext}
//             style={{
//               marginTop: 20,
//               width: '75%',
//               backgroundColor: Colors.main500 + 'bf',
//               padding: 20,
//               borderRadius: 10,
//             }}>
//             <Text
//               style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>
//               Next
//             </Text>
//           </TouchableOpacity>
//         </Center>
//       );
//     } else {
//       return null;
//     }
//   };
//   const [progress, setProgress] = useState(new Animated.Value(0));
//   const progressAnim = progress.interpolate({
//     inputRange: [0, allQuestions.length],
//     outputRange: ['0%', '100%'],
//   });

//   const renderProgressBar = () => {
//     return (
//       <View
//         style={{
//           width: '100%',
//           height: 20,
//           borderRadius: 20,
//           backgroundColor: '#00000080',
//         }}>
//         <Animated.View
//           style={[
//             {
//               height: 20,
//               borderRadius: 20,
//               backgroundColor: Colors.main200,
//             },
//             {width: progressAnim},
//           ]}></Animated.View>
//       </View>
//     );
//   };

//   const renderModal = () => {
//     return (
//       <Modal animationType="slide" transparent={true} visible={showScoreModal}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: '#000D2De0',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <View
//             style={{
//               backgroundColor: COLORS.white,
//               width: '90%',
//               borderRadius: 20,
//               padding: 20,
//               alignItems: 'center',
//             }}>
//             <Text
//               style={{fontSize: 20, fontWeight: 'bold', color: '#000D2Dd0'}}>
//               {score > allQuestions.length / 2 ? 'Congratulations' : 'Oops!!'}
//             </Text>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center',
//                 marginVertical: 20,
//               }}>
//               <Text
//                 style={{
//                   fontSize: 30,
//                   color:
//                     score > allQuestions.length / 2
//                       ? COLORS.success
//                       : COLORS.error,
//                 }}>
//                 {score}
//               </Text>
//               <Text
//                 style={{fontSize: 23, color: '#000D2Dd0', fontWeight: '500'}}>
//                 /{allQuestions.length}
//               </Text>
//             </View>

//             {/* RetyQuizButton */}
//             <View
//               style={{
//                 width: 250,
//                 flexDirection: 'row',
//                 justifyContent: 'space-around',
//               }}>
//               <Icon
//                 name="refresh"
//                 color="#000D2Dd0"
//                 size={50}
//                 onPress={restartQuiz}
//               />
//               <Icon
//                 name="home"
//                 color="#000D2Dd0"
//                 size={50}
//                 onPress={() => {
//                   navigation.replace('HomePage');
//                 }}
//               />
//             </View>
//           </View>
//         </View>
//       </Modal>
//     );
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/images/0150afa24b80b0a16a78fdf31b357701.jpg')}
//       resizeMode="cover"
//       // blurRadius={2}
//       style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       {/* bg={Colors.main100} */}
//       <Center flex="1">
//         {dataFetched ? (
//           <ScrollView
//             style={{
//               flex: 1,
//               width: 400,
//               paddingVertical: 40,
//               paddingHorizontal: 20,
//               position: 'relative',
//             }}>
//             <StatusBar barStyle="light-content" backgroundColor="black" />

//             {/* Progress bar */}
//             {renderProgressBar()}

//             {/* Question */}
//             {renderQuestion()}

//             {/* options */}
//             {renderOptions()}

//             {/* next button */}
//             {renderNextButton()}

//             {/* ShowScoreModal */}
//             {renderModal()}
//           </ScrollView>
//         ) : (
//           <Center w="100%" h="100%">
//             <VStack
//               w="90%"
//               maxW="400"
//               borderWidth="1"
//               space={8}
//               overflow="hidden"
//               rounded="md"
//               _dark={{
//                 borderColor: 'coolGray.500',
//               }}
//               _light={{
//                 borderColor: 'coolGray.200',
//               }}>
//               <Skeleton h="40" />
//               <Skeleton.Text px="4" />
//               <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
//             </VStack>
//           </Center>
//         )}
//       </Center>
//     </ImageBackground>
//   );
// }
/* eslint-disable prettier/prettier */
import {NavigationContainer, useRoute} from '@react-navigation/native';
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
  ImageBackground,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from 'react-native-elements';

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
          backgroundColor: '#0df2c980',
          borderRadius: 18,
          paddingHorizontal: 20,
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
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
          {/* <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
              opacity: 0.6,
              marginRight: 2,
            }}>
            {' '}
            /{allQuestions.length}
          </Text> */}
        </View>

        {/* Question */}

        <Text
          style={{
            color: COLORS.white,
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

      AsyncStorage.getItem('email').then(email => {
        firestore()
          .collection('Scores')
          .add({
            email: email,
            score: score,
            quiz: quizName,
          })
          .then(() => {
            console.log('User added!');
          });
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
              borderWidth: 3,
              borderColor:
                option == correctOption
                  ? COLORS.success
                  : option == currentOptionSelected
                  ? COLORS.error
                  : '#6FFDBA80',
              backgroundColor:
                option == correctOption
                  ? COLORS.success + '20'
                  : option == currentOptionSelected
                  ? COLORS.error + '20'
                  : '#6FFDBA20',
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
              width: '75%',
              backgroundColor: '#6FFDBA80',
              padding: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>
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
          backgroundColor: '#00000080',
        }}>
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: '#6FFDBA80',
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
            backgroundColor: '#000D2De0',
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
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: '#000D2Dd0'}}>
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
              <Text
                style={{fontSize: 23, color: '#000D2Dd0', fontWeight: '500'}}>
                /{allQuestions.length}
              </Text>
            </View>

            {/* RetyQuizButton */}
            <View
              style={{
                width: 250,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Icon
                name="refresh"
                color="#000D2Dd0"
                size={50}
                onPress={restartQuiz}
              />
              <Icon
                name="home"
                color="#000D2Dd0"
                size={50}
                onPress={() => {
                  navigation.replace('HomePage');
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/images/0150afa24b80b0a16a78fdf31b357701.jpg')}
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
    </ImageBackground>
  );
}
