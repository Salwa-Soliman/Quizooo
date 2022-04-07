/* eslint-disable prettier/prettier */
import React from 'react';
import {Box, Center, Image, ScrollView, Text, View, VStack} from 'native-base';
export default function ImageWithText({data}) {
  return (
    <VStack>
      {data.map((item, index, array) => (
        <Box key={index}>
          <Image source={item.image} alt="image" resizeMode="contain" />
          <Text
            color={'info.100'}
            fontSize="18"
            textAlign="center"
            mt={index === 1 ? '-15' : '-20'}>
            {item.text}
          </Text>
        </Box>
      ))}
    </VStack>
  );
}
