import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Help from '../screens/Help';
import Tracks from '../screens/Tracks';
import Profile from '../screens/Profile';
import ContactUs from '../screens/ContactUs';
import Privacy from '../screens/Privacy';

const Drawer = createDrawerNavigator();
// screenOptions={{
//   drawerPosition: 'right' }}
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        // headerShown: false,
        drawerPosition: 'right',
        drawerActiveBackgroundColor: '#3E4491',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#292A73',
        drawerLabelStyle: {
          marginLeft: -25,

          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="HomePage"
        component={HomePage}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="home" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tracks"
        component={Tracks}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="home" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="person" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="help-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="message" size={20} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Privacy"
        component={Privacy}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="privacy-tip" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
