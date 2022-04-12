/* eslint-disable prettier/prettier */
import React from 'react';
import {HStack, Text} from 'native-base';
import {Colors} from '../ColorPalete/styles';
export default function Quizo({fontSize}) {
  return (
    <HStack justifyContent={'center'} pt={'5'}>
      <Text color={Colors.mainColor} fontSize={fontSize} fontWeight={'bold'}>
        {'<'}
      </Text>
      <Text color="#fff" fontSize={fontSize} fontWeight={'500'}>
        Quizo
      </Text>
      <Text color={Colors.mainColor} fontSize={fontSize} fontWeight={'bold'}>
        {' />'}
      </Text>
    </HStack>
  );
}
