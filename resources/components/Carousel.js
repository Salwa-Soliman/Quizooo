/* eslint-disable prettier/prettier */
import React from 'react';
import {Center, ScrollView, HStack, Image} from 'native-base';

export default function Carousel() {
  return (
    <Center w="100%" flex={1} bg={'amber.100'}>
      <ScrollView
        horizontal
        my={'5'}
        pagingEnabled
        showsHorizontalScrollIndicator={true}>
        <HStack space={3} justifyContent="center">
          <Center h="40" w="80" bg="primary.300" rounded="md" shadow={3}>
            <Image
              source={require('../assets/images/carousel0.png')}
              w="100%"
              h={'100%'}
              resizeMode="cover"
              alt="img"
            />
          </Center>
          <Center h="40" w="80" bg="primary.300" rounded="md" shadow={3}>
            <Image
              source={require('../assets/images/carousel1.png')}
              w="100%"
              h={'100%'}
              resizeMode="cover"
              alt="img"
            />
          </Center>
          <Center h="40" w="80" bg="primary.500" rounded="md" shadow={3}>
            <Image
              source={require('../assets/images/carousel2.png')}
              w="100%"
              h={'100%'}
              alt="img"
              resizeMode="cover"
            />
          </Center>
          <Center h="40" w="80" bg="primary.700" rounded="md" shadow={3} />
          <Center h="40" w="40" bg="primary.300" rounded="md" shadow={3} />
          <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
          <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
        </HStack>
      </ScrollView>
    </Center>
  );
}
