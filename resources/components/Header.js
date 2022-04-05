/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';

export default function Header(props) {
  const {navigation, title, haveBackArrow} = props;
  return (
    <DropShadow style={styles.mainView}>
      <View style={styles.mainView}>
        {!haveBackArrow ? (
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              style={styles.icon}
              name="arrow-back"
              size={25}
              color="#F7A400"
            />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log(navigation);
            // navigation.navigate('DrawerNavigator');
            // navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Icon
            style={styles.icon}
            name="menu-sharp"
            size={25}
            color="#F7A400"
          />
        </TouchableOpacity>
      </View>
    </DropShadow>
  );
}

const styles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 55,
    zIndex: 2,
    borderTopWidth: 1,
    borderTopColor: 'black',
    backgroundColor: '#1A1B4B',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginHorizontal: 20,
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F7A400',
  },
  logo: {
    width: 50,
    height: 50,
    margin: 10,
  },
});
