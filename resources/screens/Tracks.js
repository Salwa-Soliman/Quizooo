/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import StaggerComp from './Stagger';
import {Colors} from '../ColorPalete/styles';
import {tracks} from '../util/tracks';
import {Center} from 'native-base';
// import {Colors} from './../ColorPalete/styles';

export default function Tracks({navigation}) {
  let navigateToCources = data => {
    // console.log(data.cources);
    navigation.navigate('Courses', data.cources);
  };

  return (
    <ImageBackground
      resizeMode="cover"
      style={{flex: 1}}
      source={require('../assets/images/bg.jpg')}>
      {/* bg={Colors.bgColor} */}
      <Center pt="5">
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              paddingBottom: 30,
            }}>
            {tracks.map(item => {
              return (
                <View
                  style={{marginTop: item.margin, width: 180}}
                  key={item.trackName}>
                  <TouchableOpacity
                    onPress={() =>
                      navigateToCources({
                        cources: item.cources,
                        // track: item.trackName,
                      })
                    }
                    style={{
                      borderColor: Colors.mainColor + '90',
                      borderWidth: 2,
                      margin: 9,
                      borderRadius: 20,
                      backgroundColor: Colors.mainColor + '40',
                    }}>
                    <View>
                      <Image
                        source={item.image}
                        style={{
                          width: '100%',
                          height: 150,
                          borderRadius: 15,
                          flex: 1,
                        }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: '#fff',
                          padding: 10,
                        }}>
                        {item.trackName}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <StaggerComp navigation={navigation} />
      </Center>
    </ImageBackground>
  );
}
