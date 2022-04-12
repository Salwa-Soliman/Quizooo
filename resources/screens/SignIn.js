/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';

import {
  Text,
  Button,
  Center,
  Box,
  FormControl,
  VStack,
  Input,
  Link,
  HStack,
  Modal,
} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';
import {login} from '../util/auth';
import {Colors} from '../ColorPalete/styles';
import {AuthContext} from '../store/auth-context';

export default function SignIn({navigation}) {
  const authContext = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [modalError, setmodalError] = useState({header: '', body: ''});

  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      resizeMode="cover"
      // blurRadius={2}
      style={styles.bgImage}>
      <Center w="100%" flex="1">
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <VStack space={3} mt="5">
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
                  fontSize="18"
                  onChangeText={val => setEmail(val)}
                  value={email}
                  // placeholder="xyz12@gmail.com"
                  // placeholderTextColor={'gray.500'}
                />
              </FormControl>
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
                <Link
                  _text={{
                    fontSize: 'xs',
                    fontWeight: '500',
                    color: Colors.mainColor,
                  }}
                  alignSelf="flex-end"
                  mt="1">
                  Forgot Password?
                </Link>
              </FormControl>
              <Button
                bg={Colors.mainColor}
                mt="2"
                colorScheme={'info.300'}
                onPress={() => checkUserInputs()}>
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="#fff">
                  Don't have an account?{' '}
                </Text>
                <Link
                  _text={{
                    color: Colors.mainColor,
                    fontWeight: 'medium',
                    fontSize: 'sm',
                  }}
                  onPress={() => navigation.navigate('SignUp')}>
                  Sign Up
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
        {/* Error Modal  */}
        <Center>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header color="white">{modalError.header}</Modal.Header>
              <Modal.Body>
                <Text fontSize="18">{modalError.body}</Text>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    onPress={() => {
                      setShowModal(false);
                    }}
                    bg={Colors.mainColor}>
                    OK
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Center>
      </Center>
    </ImageBackground>
  );

  async function checkUserInputs() {
    if (
      !email.match(/^([a-z\d\._]{3,20})@([a-z]{5,10})\.([a-z]{3,10})$/i) ||
      !password.match(/^[a-z\d]{8,15}$/i)
    ) {
      console.log('Invalid email or password');
      setmodalError({header: 'Try again!', body: 'Invalid email or password'});
      setShowModal(true);
    } else {
      try {
        const token = await login(email, password);
        authContext.authenticate(email, token);
      } catch (err) {
        setmodalError({
          header: 'Authintication Failed!',
          body: 'Authintication Failed!\nPlease check your credentials and try again',
        });
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
