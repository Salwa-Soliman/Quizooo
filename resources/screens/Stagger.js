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

  console.log('stagger', navigation);
  return (
    <View style={styles.mainView}>
      <Center>
        <Box alignItems="center" minH="220">
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
                duration: 100,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}>
            <IconButton
              mb="4"
              variant="solid"
              bg="indigo.500"
              colorScheme="indigo"
              borderRadius="full"
              onPress={() => {
                navigation.navigate('Help');
              }}
              icon={<Icon size={30} name="help-circle-outline" />}
            />
            <IconButton
              mb="4"
              variant="solid"
              bg="yellow.400"
              colorScheme="yellow"
              borderRadius="full"
              onPress={() => {
                navigation.navigate('Privacy');
              }}
              icon={<Icon size={30} name="shield-account" />}
            />
            {/* <IconButton
              mb="4"
              variant="solid"
              bg="teal.400"
              colorScheme="teal"
              borderRadius="full"
              icon={<Icon size={30} name="account" />}
            /> */}
            <IconButton
              mb="4"
              variant="solid"
              bg="red.500"
              colorScheme="red"
              borderRadius="full"
              onPress={() => {
                authCtx.logout();
              }}
              icon={<Icon size={30} name="logout" />}
            />
          </Stagger>
        </Box>
        <HStack alignItems="center">
          <IconButton
            variant="solid"
            borderRadius="full"
            size="lg"
            onPress={onToggle}
            bg="cyan.400"
            icon={<Icon size={30} name="view-headline" />}
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
