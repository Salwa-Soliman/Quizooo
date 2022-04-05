/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'native-base';

export default function Input({label, secure}) {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
}
