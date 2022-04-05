/* eslint-disable prettier/prettier */
import React from 'react';
import {HStack} from 'native-base';
import {Animated, View, StyleSheet} from 'react-native';
import {useWindowDimensions} from 'react-native';
import {Colors} from '../ColorPalete/styles';
export default function Pagination({data, scrollX}) {
  const {width} = useWindowDimensions();

  return (
    <HStack h="64" mt="5">
      {data.map((slide, i) => {
        //represents prev dot, current dot & next dot
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10], //width of prev, current &next
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={i}
            style={[styles.dot, {width: dotWidth, opacity}]}
          />
        );
      })}
    </HStack>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRaduis: 5,
    backgroundColor: Colors.mainColor,
    marginHorizontal: 5,
  },
});
