/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Button, Image, VStack, Center, Text, View} from 'native-base';
import {Colors} from '../ColorPalete/styles';
// import ImageWithText from '../components/ImageWithText';
import StaggerComp from './Stagger';
import Quizo from '../components/Quizo';

export default function HomePage(props) {
  const {navigation, setIndex} = props;

  const changeTextArray = [
    'expands your network',
    'develops new skills',
    'launches new careers',
    'creates new hobbies',
    'opens new doors',
  ];

  const [changedText, setChangedText] = useState('opens new doors');

  let changeTextInterval;

  const imageWithTextDataArray = [
    {
      image: require('../assets/images/home4.png'),
      text: 'Learn with fun, quick lessons on your phone that teach you to write real JavaScript.',
    },
    {
      image: require('../assets/images/track-your-progress.png'),
      text: 'Move through progressively challenging levels as you develop your abilities.',
    },
    {
      image: require('../assets/images/learn-like-a-pro.png'),
      text: 'Graduate with fundamental programming skills for your next step as a coder.',
    },
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    changeTextInterval = setInterval(changeText, 1500);
    // cleanup
    return () => clearInterval(changeTextInterval);
  });

  function changeText() {
    let val = changeTextArray.shift();
    changeTextArray.push(val);
    setChangedText(val);
  }

  return (
    <>
      <ImageBackground
        // source={require('../assets/images/5a6431d058ebdd24867f4de4c4748ee3.jpg')}
        source={require('../assets/images/bg.jpg')}
        resizeMode="cover"
        // blurRadius={2}
        style={styles.bgImage}>
        {/* <ScrollView w="100%" flex="1">  bg={Colors.bgColor} */}
        <View flex="1">
          <Center p="5" justifyContent="space-between" flex={'1'}>
            <VStack alignItems={'center'}>
              {/* <Quizo/> */}
              <Quizo fontSize="30" />
              {/* Changed Text  */}
              <Text color={Colors.mainColor} fontSize={17} my="3">
                {changedText}
              </Text>
            </VStack>

            <Image
              source={require('../assets/images/learn-with-fun.png')}
              resizeMode="contain"
              w="300"
              alt="home 1"
            />

            <Button
              px="5"
              py={'3'}
              bg={Colors.mainColor + '40'}
              borderWidth="2"
              borderColor={Colors.mainColor + '80'}
              rounded="2xl"
              onPress={() => setIndex(1)}>
              <Text color={Colors.main100} fontWeight="bold">
                Start learning
              </Text>
            </Button>
          </Center>

          {/* <Center w={'80%'}>
              <Heading mt="40" textAlign={'center'} color="info.100">
                The best way to start your coding adventure.
              </Heading>
              <ImageWithText data={imageWithTextDataArray} />
            </Center> */}
          {/* </Center> */}
          {/* </ScrollView> */}
        </View>
        <StaggerComp navigation={navigation} />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
