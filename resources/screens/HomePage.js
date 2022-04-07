/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  VStack,
  Center,
  Text,
  PresenceTransition,
  ScrollView,
  FlatList,
  Tooltip,
} from 'native-base';
import NavigationTabs from './NavigationTabs';
import BottomNav from '../components/BottomNav';
import {Colors} from '../ColorPalete/styles';
import Tracks from './Tracks';
import ImageWithText from '../components/ImageWithText';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StaggerComp from './Stagger';
// import { Colors } from './../ColorPalete/styles';
export default function HomePage(props) {
  const {navigation, setIndex} = props;

  const [isOpen, setIsOpen] = useState(false);

  const changableText = [
    'expands your network',
    'develops new skills',
    'launches new careers',
    'creates new hobbies',
    'opens new doors',
  ];

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

  const [changedText, setChangedText] = useState('opens new doors');
  function show() {
    if (!isOpen) {
      setTimeout(() => setIsOpen(true), 500);

      setInterval(() => {
        let val = changableText.shift();
        changableText.push(val);
        setChangedText(val);
        // console.log(val);
      }, 1500);
    }
  }

  show();

  return (
    <>
      <ImageBackground
        source={require('../assets/images/0150afa24b80b0a16a78fdf31b357701.jpg')}
        resizeMode="cover"
        // blurRadius={2}
        style={styles.bgImage}>
        <ScrollView w="100%" flex="1">
          <Center p="5" flex="1">
            <Center w={'80%'}>
              <VStack>
                <Center>
                  <HStack>
                    <Text
                      color={Colors.main200}
                      fontSize="30"
                      fontWeight={'500'}>
                      {'<'}
                    </Text>
                    <Text color="#fff" fontSize="30" fontWeight={'500'}>
                      Quizo
                    </Text>
                    <Text
                      color={Colors.main200}
                      fontSize="30"
                      fontWeight={'500'}>
                      {' />'}
                    </Text>
                  </HStack>
                  {/* <Heading color="info.100" textAlign={'center'}>
                    Welcome to{' '}
                    <Text color={Colors.main200} shadow="3">
                      Quizo,
                    </Text>
                    {'\n'}the coding app for beginners.
                  </Heading> */}
                  <Box alignItems="center" textAlign={'center'} my="3">
                    <Text fontSize={20} color={Colors.main200} fontWeight="500">
                      Learning to code
                    </Text>
                    <Text color={Colors.main200} fontSize={17}>
                      {changedText}
                    </Text>
                  </Box>
                </Center>
              </VStack>

              <Image
                source={require('../assets/images/learn-with-fun.png')}
                resizeMode="contain"
                w="100%"
                alt="home 1"
              />

              <Center>
                <HStack>
                  <Tooltip label="Click here to read more" openDelay={500}>
                    <Button
                      px="5"
                      py={'3'}
                      bg={Colors.main200 + '9f'}
                      _text={{
                        color: Colors.main400,
                      }}
                      rounded="2xl"
                      onPress={() => setIndex(1)}>
                      Start learning
                    </Button>
                  </Tooltip>
                </HStack>
              </Center>
            </Center>
            <Center w={'80%'}>
              <Heading mt="40" textAlign={'center'} color="info.100">
                The best way to start your coding adventure.
              </Heading>
              <ImageWithText data={imageWithTextDataArray} />
            </Center>
          </Center>
        </ScrollView>
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
