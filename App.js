/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// import React from 'react';
import React, {useContext} from 'react';
import {NativeBaseProvider} from 'native-base';
import SignIn from './resources/screens/SignIn';
import SignUp from './resources/screens/SignUp';
import Privacy from './resources/screens/Privacy';
import Help from './resources/screens/Help';
import HomePage from './resources/screens/HomePage';
import Splash from './resources/screens/Splash';
import Carousel from './resources/components/Carousel';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from './resources/ColorPalete/styles';
import Onboarding from './resources/screens/Onboarding';
import Tracks from './resources/screens/Tracks';
import AuthContextProvider from './resources/store/auth-context';
import {AuthContext} from './resources/store/auth-context';
import SingleQuestion from './resources/screens/SingleQuestion';
import Quizzes from './resources/screens/Quizzes';
import DrawerNavigator from './resources/components/Drawer';
import 'react-native-gesture-handler';
import Profile from './resources/screens/Profile';
import NavigationTabs from './resources/screens/NavigationTabs';
import StaggerComp from './resources/screens/Stagger';
import LearningPaths from './resources/screens/LearningPaths';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider flex={1} bg={Colors.bgColor}>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}

export default App;

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NavigationTabs"
        component={NavigationTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tracks"
        component={Tracks}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quizzes"
        component={Quizzes}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingleQuestion"
        component={SingleQuestion}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{headerStyle: {backgroundColor: '#6FFDBA'}}}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{headerStyle: {backgroundColor: '#6FFDBA'}}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LearningPaths"
        component={LearningPaths}
        // options={{headerShown: false}}
      />

      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NavigationTabs"
          component={NavigationTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tracks"
          component={Tracks}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Quizzes"
          component={Quizzes}
          options={{headerStyle: {backgroundColor: Colors.main200}}}

          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="SingleQuestion"
          component={SingleQuestion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{headerStyle: {backgroundColor: Colors.main200}}}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{headerStyle: {backgroundColor: Colors.main200}}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LearningPaths"
          component={LearningPaths}
          options={{headerStyle: {backgroundColor: Colors.main200}}}

          // options={{headerShown: false}}
        />

        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {/* {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />} */}
    </NavigationContainer>
  );
}
