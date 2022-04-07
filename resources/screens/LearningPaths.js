/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Center, ScrollView, Text, HStack} from 'native-base';
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

export default function LearningPaths({navigation}) {
  const route = useRoute();
  const {selectedTutorial} = route.params;

  const [lessonIndex, setLessonIndex] = useState(0);
  const [material, setMaterial] = useState([]); //course content

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

    AsyncStorage.getItem('email').then(email => {
      firestore()
        .collection('Lessons')
        .doc(email)
        .set(
          {
            index: n,
          },
          {merge: true},
        )
        .then(() => {
          console.log('User added!');
        });
    });
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
    <Center w="100%" m="0" flex={'10'} bg={Colors.main100}>
      <ImageBackground
        blurRadius={5}
        style={{flex: 1, width: '100%', alignItems: 'center'}}
        resizeMode="cover"
        source={require('../assets/images/0150afa24b80b0a16a78fdf31b357701.jpg')}>
        {material.length ? (
          <Center w="80%" flex="5">
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
                      bg="#6FFFF25f"
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
                      bg="#6FFFF25f"
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
                  <TouchableOpacity onPress={() => console.log('Finished!')}>
                    <Text
                      bg="#6FFFF25f"
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
          </Center>
        ) : (
          <LoadingOverlay message="Loading Content, please wait" />
        )}
      </ImageBackground>
    </Center>
  );
}
