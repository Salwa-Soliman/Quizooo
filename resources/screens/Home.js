/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const title = 'Home';
  const haveBackArrow = false;

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('opened', value);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    storeData('opened');
  }, []);

  return (
    <View style={styles.mainView}>
      <Header
        navigation={navigation}
        title={title}
        haveBackArrow={haveBackArrow}
      />

      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#3E4491',
  },
});
