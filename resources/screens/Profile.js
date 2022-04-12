/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component, useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  Center,
  Text,
  View,
  Button,
  Heading,
  VStack,
  Box,
  HStack,
} from 'native-base';
import {AuthContext} from '../store/auth-context';
import {Card} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StaggerComp from './Stagger';
import {ImageBackground} from 'react-native';
import {Colors} from '../ColorPalete/styles';

export default function Profile({navigation}) {
  const [completedQuizzes, setCompletedQuizzes] = useState({});
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');

  const getQuizzes = () => {
    return AsyncStorage.getItem('email').then(email => {
      setEmail(email);

      firestore()
        .collection('Scores')
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
          var quizzes = [];
          var filtered = {};
          querySnapshot.forEach(res => {
            const {email, quiz, score, date} = res.data();

            filtered[quiz] = filtered[quiz] > score ? filtered[quiz] : score;

            quizzes.push({email, quiz, score, date});
          });
          console.log('filtered', filtered);
          setData(quizzes);
          setCompletedQuizzes(filtered);
        })
        .catch(e => console.log(e));
    });
  };

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      resizeMode="cover"
      source={require('../assets/images/bg.jpg')}>
      {/* profile picture  */}
      <Center w="100%" flex=".2">
        <View w="100%" alignItems={'center'}>
          {/* hr  */}
          <View bg={Colors.mainColor + '20'} h="40" w="100%" />
          {/* overlay  */}
          <View
            w="100%"
            h="1"
            bg={Colors.mainColor + 'c0'}
            position="absolute"
            bottom={'0'}
          />
          {/* image  */}
          <Image
            style={{maxWidth: 100, height: 100}}
            resizeMode="contain"
            source={require('../assets/images/avatar.png')}
            position="absolute"
            top="70%"
          />
        </View>
        <Text
          mt="16"
          // color="#fff"
          color={Colors.mainColor}>
          {email}
        </Text>
      </Center>
      <View flex=".65" w="100%" p="6" alignItems={'center'}>
        <Heading mb="3" color="#fff">
          Completed
        </Heading>
        {data.length ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {Object.keys(completedQuizzes).map((key, index) => (
              <View
                key={index}
                alignItems={'center'}
                justifyContent="center"
                p="3"
                my="3"
                w="250"
                bg={Colors.blue100 + '20'}
                borderRadius="xl"
                borderWidth="1"
                borderColor={Colors.blue100 + '80'}>
                <Text
                  fontSize={'20'}
                  mb="2"
                  fontWeight="600"
                  color={Colors.mainColor + 'c0'}>
                  {key}
                </Text>
                <HStack>
                  <Text fontSize={'18'} color="info.100">
                    Highest Score:{' '}
                  </Text>
                  <Text
                    fontSize={'18'}
                    color={completedQuizzes[key] < 5 ? '#f00' : '#0f0'}
                    fontWeight="600">
                    {completedQuizzes[key] * 10}%
                  </Text>
                </HStack>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View
            p="3"
            my="3"
            w="250"
            bg={Colors.blue100 + '20'}
            borderRadius="xl"
            borderWidth="1"
            borderColor={Colors.blue100 + '80'}>
            <Text
              textAlign={'center'}
              color={Colors.mainColor + 'c0'}
              fontSize="18">
              Nothing to show
            </Text>
          </View>
        )}
      </View>
      <StaggerComp navigation={navigation} />
    </ImageBackground>
  );
}
