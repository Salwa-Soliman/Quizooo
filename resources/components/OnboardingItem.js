/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {
  FlatList,
  View,
  Text,
  Center,
  Image,
  Heading,
  VStack,
  Box,
} from 'native-base';
import React from 'react';
import {useWindowDimensions} from 'react-native';

export default function OnboardingItem({item}) {
  const {width} = useWindowDimensions();
  return (
    <Center px="10" w={width} flex={'1'}>
      <VStack alignItems={'center'}>
        <Image
          source={item.image}
          resizeMode="contain"
          // w="300"
          alt="image"
          flex={'0.8'}
        />
        <Box flex={'0.4'} alignItems={'center'}>
          <Heading color="#fff" fontSize={'3xl'} my={'1.5'}>
            {item.heading}
          </Heading>
          <Text color={'gray.300'} fontSize={'lg'} textAlign={'center'}>
            {item.description}
          </Text>
        </Box>
      </VStack>
    </Center>
  );
}
