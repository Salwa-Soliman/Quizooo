/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Center,
  ScrollView,
  Text,
  HStack,
  Modal,
  Button,
  IconButton,
  Image,
} from 'native-base';
import React, {useEffect, useState, useRef} from 'react';
import {ImageBackground} from 'react-native';
import {getMaterial} from '../util/E-Learning';
import Topic from '../components/Topic';
import {TouchableOpacity} from 'react-native';
import LoadingOverlay from './../components/LoadingOverlay';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import {Colors} from './../ColorPalete/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Tutorial({navigation}) {
  const route = useRoute();
  const {selectedTutorial, quizCode, quizName} = route.params;

  const [showModal, setShowModal] = useState(false);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [material, setMaterial] = useState([]); //course content
  console.log('lesson', lessonIndex);
  const codes = {
    html: 'XDAP',
    css: '8KZF',
    javascript: 'M6WK',
    julia: 'ZC70',
    python: 'J0N5',
    java: 'KPQA',
  };
  console.log('learning', codes[selectedTutorial]);
  const scrollRef = useRef();

  const scrollTop = () => {
    scrollRef.current.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const updateIndex = n => {
    scrollTop();
    setLessonIndex(n);
  };

  useEffect(() => {
    AsyncStorage.getItem('email').then(email => {
      firestore()
        .collection('Lessons')
        .doc(email)
        .set(
          {
            index: 0,
          },
          {merge: true},
        )
        .then(() => {
          console.log('User added!');
        });
    });

    if (!material.length) {
      getMaterial(codes[selectedTutorial] || codes['html'])
        .then(response => {
          // console.log('then', response);
          setMaterial(response);
        })
        .catch(err => console.log(err));
    }
  }, []);
  // console.log('learning', material);

  return (
    <Center w="100%" m="0" flex={'10'} bg={Colors.bgColor}>
      <ImageBackground
        blurRadius={5}
        style={{flex: 1, width: '100%', alignItems: 'center'}}
        resizeMode="cover"
        source={require('../assets/images/bg.jpg')}>
        {material.length ? (
          <Center w="85%" flex="5">
            <ScrollView
              flex="3"
              showsVerticalScrollIndicator={false}
              ref={scrollRef}>
              {/* render content  */}
              <Topic obj={material[lessonIndex]} />
              {/* next, previous, next buttons  */}
              <HStack
                flex="2"
                justifyContent={!lessonIndex ? 'flex-end' : 'space-between'}
                my="5">
                {!!lessonIndex && (
                  <TouchableOpacity
                    onPress={() => updateIndex(lessonIndex - 1)}>
                    <Text
                      bg={Colors.mainColor + '40'}
                      borderWidth="2"
                      borderColor={Colors.mainColor + '60'}
                      colorScheme={Colors.blue100}
                      py="2"
                      px="5"
                      rounded={'xl'}
                      fontWeight="600"
                      color="info.100">
                      Previous
                    </Text>
                  </TouchableOpacity>
                )}
                {lessonIndex !== material.length - 1 && (
                  <TouchableOpacity
                    onPress={() => updateIndex(lessonIndex + 1)}>
                    <Text
                      bg={Colors.mainColor + '40'}
                      borderWidth="2"
                      borderColor={Colors.mainColor + '60'}
                      colorScheme={Colors.blue100}
                      py="2"
                      px={'5'}
                      rounded={'xl'}
                      fontWeight="600"
                      color="info.100">
                      Next
                    </Text>
                  </TouchableOpacity>
                )}
                {lessonIndex === material.length - 1 && (
                  <TouchableOpacity onPress={() => setShowModal(true)}>
                    <Text
                      bg={Colors.mainColor + '40'}
                      borderWidth="2"
                      borderColor={Colors.mainColor + '60'}
                      colorScheme={Colors.blue100}
                      py="2"
                      px="5"
                      rounded={'xl'}
                      fontWeight="600"
                      color="info.100">
                      Finish
                    </Text>
                  </TouchableOpacity>
                )}
              </HStack>
            </ScrollView>
            {renderModal()}
          </Center>
        ) : (
          <LoadingOverlay message="Loading Tutorial .. Please Wait" />
        )}
      </ImageBackground>
    </Center>
  );

  function renderModal() {
    return (
      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header
              _text={{
                color: Colors.orange300,
                fontSize: 18,
              }}>
              Congratulations
            </Modal.Header>
            <Modal.Body alignItems="center">
              <Image
                resizeMode="contain"
                // w="26"
                mb="2"
                source={require('../assets/images/icons8-confetti-48.png')}
                alt="confetti"
              />
              <Text fontSize="16" fontWeight={'600'}>
                You've completed this tutorial{' '}
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2} justifyContent="space-between" w="100%">
                {/* Home */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('NavigationTabs');
                  }}>
                  <HStack
                    bg={Colors.blue300 + 'df'}
                    borderRadius={'xl'}
                    borderWidth="2"
                    borderColor={Colors.blue300 + '50'}
                    h="12"
                    alignItems={'center'}>
                    <IconButton
                      // mb="4"
                      bg="#035B5000"
                      variant="solid"
                      colorScheme="#99BAFF00"
                      borderRadius="xl"
                      icon={
                        <Icon size={30} name="home" style={{color: '#fff'}} />
                      }
                    />

                    <Text color="#fff" fontWeight={'bold'} fontSize="18" pr="4">
                      Home
                    </Text>
                  </HStack>
                </TouchableOpacity>
                {/* Quiz  */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SingleQuestion', {
                      quizCode,
                      quizName,
                    });
                  }}>
                  <HStack
                    bg={Colors.blue300 + 'df'}
                    borderRadius={'xl'}
                    borderWidth="2"
                    borderColor={Colors.blue300 + '50'}
                    h="12"
                    alignItems={'center'}>
                    <IconButton
                      // mb="4"
                      bg="#035B5000"
                      variant="solid"
                      colorScheme="#99BAFF50"
                      borderRadius="xl"
                      icon={
                        <Icon
                          size={30}
                          name="draw-pen"
                          style={{color: '#fff'}}
                        />
                      }
                    />
                    <Text color="#fff" fontWeight={'bold'} fontSize="18" pr="4">
                      Quiz
                    </Text>
                  </HStack>
                </TouchableOpacity>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    );
  }
}
