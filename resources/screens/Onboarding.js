/* eslint-disable prettier/prettier */
import React, {useState, useRef, useEffect} from 'react';
import {FlatList, Text, HStack, Center, View, Box, VStack} from 'native-base';
import {ImageBackground, Animated} from 'react-native';
import {Colors} from '../ColorPalete/styles';
import OnboardingItem from '../components/OnboardingItem';
import Pagination from '../components/Pagination';
import OnboardingButtons from '../components/OnboardingButtons';
// import {firebase} from '@react-native-firebase/app';

export default function Onboarding({navigation}) {
  // Runs only one time to change text/1500ms
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setIsOpen(true), 500);

      // setInterval(() => {
      //   let val = changableText.shift();
      //   changableText.push(val);
      //   setChangedText(val);
      // }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [changedText, setChangedText] = useState('opens new doors');
  // State to indicate that Screen's opened => text has changed
  const [isOpen, setIsOpen] = useState(false);
  // Array of text to change
  const changableText = [
    'expands your network',
    'develops new skills',
    'launches new careers',
    'creates new hobbies',
    'opens new doors',
  ];

  // Flatlist Content
  const slides = [
    {
      heading: 'Learn like a pro',
      description:
        'Tackle big concepts in bite sized steps, move at your own pace',
      image: require('../assets/images/learn-like-a-pro.png'),
    },
    {
      heading: 'Build a habit',
      description:
        'Learn a little everyday and Quizo will optimize your sessions',
      image: require('../assets/images/build-a-habit.png'),
    },
    // {
    //   heading: 'Learn with fun',
    //   description:
    //     'Learn with fun, quick lessons on your phone that teach you to write real JavaScript.',
    //   image: require('../assets/images/learn-with-fun.png'),
    // },
    {
      heading: 'Track your progress',
      description:
        'Move through progressively challenging levels as you develop your abilities',
      image: require('../assets/images/track-your-progress.png'),
    },
    {
      heading: 'Level up on the go',
      description: 'Build skills easily across a rich curriculum of data',
      image: require('../assets/images/level-up.png'),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const ViewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const slidesRef = useRef(null);

  // const user = firebase.auth().currentUser;

  // user.providerData.forEach(userInfo => {
  //   console.log('User info for provider: ', userInfo);
  // });

  return (
    <Center w="100%" m="0" bg={Colors.bgColor} flex={'10'}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/0150afa24b80b0a16a78fdf31b357701.jpg')}>
        <Box flex={'2'}>
          {/* Logo  */}
          <HStack justifyContent={'center'} pt={'10'}>
            <Text color={Colors.mainColor} fontSize="20" fontWeight={'500'}>
              {'<'}
            </Text>
            <Text color="#fff" fontSize="20" fontWeight={'500'}>
              Quizo
            </Text>
            <Text color={Colors.mainColor} fontSize="20" fontWeight={'500'}>
              {' />'}
            </Text>
          </HStack>
          {/* Changable text  */}
          {/* <VStack alignItems="center" textAlign={'center'} my="3">
            <Text fontSize={20} color="info.300" fontWeight="500">
              Learning to code
            </Text>
            <Text color="info.100" fontSize={17}>
              {changedText}
            </Text>
          </VStack> */}
        </Box>
        {/* Flatlist Containing images & text  */}
        <View flex={'4'}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={item => item.heading}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            onViewableItemsChanged={ViewableItemsChanged}
            scrollEventThrottle={32}
            data={slides}
            renderItem={({item}) => <OnboardingItem item={item} />}
          />
        </View>
        {/* Paginator  */}
        <View flex={'1'} alignItems={'center'}>
          <Pagination data={slides} scrollX={scrollX} />
        </View>
        {/* Buttons redirecting to sign in & sign up  */}
        <View flex={'1.5'} alignItems={'center'}>
          <OnboardingButtons navigation={navigation} />
        </View>
      </ImageBackground>
    </Center>
  );
}
