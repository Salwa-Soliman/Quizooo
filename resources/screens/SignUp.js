/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';

import {
  Text,
  Button,
  Center,
  Box,
  Heading,
  FormControl,
  VStack,
  Input,
  Link,
  HStack,
  Modal,
} from 'native-base';

import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {checkIfEmailExists, signUpRequest} from '../util/http';
import {createUser} from '../util/auth';
import {Colors} from '../ColorPalete/styles';
import {AuthContext} from '../store/auth-context';

export default function SignUp({navigation}) {
  const authContext = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmedPassword, setConfirmedPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      resizeMode="cover"
      // blurRadius={2}
      style={styles.bgImage}>
      <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <VStack space={3} mt="5">
            {/* Email  */}
            <FormControl>
              <Text
                w="65"
                fontSize="18"
                fontWeight="500"
                bg={Colors.darkColor}
                color="#fff"
                zIndex="2"
                textAlign="center"
                top="3"
                left="5">
                Email
              </Text>
              <Input
                color={Colors.mainColor}
                onChangeText={val => setEmail(val)}
                value={email}
                fontSize="18"
                // placeholder="xyz12@gmail.com"
                // placeholderTextColor={'gray.500'}
              />
            </FormControl>
            {/* Password */}
            <FormControl>
              <Text
                w="100"
                fontSize="18"
                fontWeight="500"
                bg={Colors.darkColor}
                color="#fff"
                zIndex="2"
                textAlign="center"
                top="3"
                left="5">
                Password
              </Text>
              <Input
                type="password"
                onChangeText={val => setPassword(val)}
                value={password}
                color={Colors.mainColor}
                fontSize="18"
                // placeholder="At least 8 characters"
                // placeholderTextColor={'gray.500'}
              />
            </FormControl>
            {/* Confirm Password */}
            <FormControl>
              <Text
                w="170"
                fontSize="18"
                fontWeight="500"
                bg={Colors.darkColor}
                color="#fff"
                zIndex="2"
                textAlign="center"
                top="3"
                left="5">
                Confirm Password
              </Text>
              <Input
                type="password"
                onChangeText={val => setConfirmedPassword(val)}
                value={confirmedPassword}
                color={Colors.mainColor}
                fontSize="18"
                // placeholder="Same as above"
                // placeholderTextColor={'gray.500'}
              />
            </FormControl>
            <Button
              bg={Colors.mainColor}
              mt="2"
              colorScheme={'info.300'}
              onPress={() => validateInputs()}>
              Sign up
            </Button>

            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="#fff">
                Already have an account?{'  '}
              </Text>
              <Link
                _text={{
                  fontWeight: 'medium',
                  fontSize: 'sm',
                  color: Colors.mainColor,
                }}
                onPress={() => navigation.navigate('SignIn')}>
                Sign In
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
      {/* Modal  */}
      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Check your inputs!</Modal.Header>
            <Modal.Body>
              <Text fontSize="18">{errorMessage}</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  onPress={() => {
                    setShowModal(false);
                  }}
                  bg={Colors.mainColor}
                  colorScheme={'info.300'}>
                  OK
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </ImageBackground>
  );

  async function validateInputs() {
    if (!email.match(/^([a-z\d\._]{3,20})@([a-z]{5,10})\.([a-z]{3,10})$/i)) {
      console.log('invalid email');
      setErrorMessage('Invalid Email \nHint: xyz12@gmail.com');
      setShowModal(true);
    } else if (!password.match(/^[a-z\d]{8,15}$/i)) {
      setErrorMessage(
        'Invalid Password \nHint: Password should be 8 characters at least',
      );
      setShowModal(true);
    } else if (password !== confirmedPassword) {
      setErrorMessage('Please check your password \nHint: Password Mismatch');
      setShowModal(true);
    } else {
      console.log('Authinticating ...');

      try {
        const token = await createUser(email, password);
        authContext.authenticate(email, token);
        console.log('try');
        // navigation.replace('Home');
      } catch (err) {
        console.warn(err);
        setErrorMessage('Email Already exists');
        setShowModal(true);
      }
    }
  }
}
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
