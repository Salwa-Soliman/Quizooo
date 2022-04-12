/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Center,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../store/auth-context';
import {StyleSheet, View} from 'react-native';

export default function StaggerComp({navigation}) {
  const authCtx = useContext(AuthContext);
  const {isOpen, onToggle} = useDisclose();

  return (
    <View style={styles.mainView}>
      <Center>
        <Box alignItems="center" minH="240">
          <Stagger
            visible={isOpen}
            initial={{
              opacity: 0,
              scale: 0,
              translateY: 34,
            }}
            animate={{
              translateY: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: 'spring',
                mass: 0.8,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
            exit={{
              translateY: 34,
              scale: 0.5,
              opacity: 0,
              transition: {
                duration: 50,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}>
            {/* Home */}
            <IconButton
              mb="4"
              variant="solid"
              bg="#035B50b0"
              colorScheme="#99BAFF50"
              borderRadius="full"
              onPress={() => {
                navigation.navigate('NavigationTabs');
              }}
              icon={<Icon size={30} name="home" style={{color: '#fff'}} />}
            />
            {/* Help  */}
            <IconButton
              mb="4"
              variant="solid"
              bg="#035B50b0"
              colorScheme="#99BAFF50"
              borderRadius="full"
              onPress={() => {
                navigation.navigate('Help');
              }}
              icon={
                <Icon
                  size={30}
                  name="help-network-outline"
                  style={{color: '#fff'}}
                />
              }
            />
            {/* Privacy  */}
            <IconButton
              mb="4"
              variant="solid"
              bg="#035B50b0"
              colorScheme="#99BAFF50"
              borderRadius="full"
              onPress={() => {
                navigation.navigate('Privacy');
              }}
              icon={
                <Icon size={30} name="shield-account" style={{color: '#fff'}} />
              }
            />
            {/* Logout  */}
            <IconButton
              mb="4"
              variant="solid"
              bg="#035B50b0"
              colorScheme="#99BAFF50"
              borderRadius="full"
              onPress={() => {
                authCtx.logout();
              }}
              icon={<Icon size={30} name="logout" style={{color: '#fff'}} />}
            />
          </Stagger>
        </Box>
        <HStack alignItems="center">
          <IconButton
            variant="solid"
            borderRadius="full"
            size="md"
            onPress={onToggle}
            bg="#6FFDBA80"
            colorScheme="#99BAFF"
            icon={
              <Icon size={35} name="dots-horizontal" style={{color: '#fff'}} />
            }
          />
        </HStack>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});
