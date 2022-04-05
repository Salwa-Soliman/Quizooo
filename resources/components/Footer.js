import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer({navigation}) {
  return (
    <DropShadow style={styles.mainView}>
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon style={styles.icon} name="home" size={25} color="#F7A400" />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Tracks');
          }}>
          <Icon style={styles.icon} name="pencil" size={25} color="#F7A400" />
          <Text style={styles.text}>Quizzes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Icon style={styles.icon} name="user" size={25} color="#F7A400" />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </DropShadow>
  );
}

const styles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 55,
    borderTopWidth: 1,
    borderTopColor: 'black',
    backgroundColor: '#1A1B4B',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    shadowColor: '#F7A400',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  icon: {
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    color: '#F7A400',
    fontSize: 15,
  },
  iconContainer: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  footerTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});
