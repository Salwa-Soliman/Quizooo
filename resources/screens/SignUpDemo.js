/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {
  Text,
  View,
  Button,
  Center,
  Box,
  Heading,
  FormControl,
  VStack,
  Input,
  Link,
  HStack,
  WarningOutlineIcon,
} from 'native-base';

import {ImageBackground, StyleSheet} from 'react-native';

export default function SignUp() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({...errors, name: 'Name is required'});
      return false;
    } else if (formData.name.length < 3) {
      setErrors({...errors, name: 'Name is too short'});
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
  };

  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired isInvalid={'name' in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}>
          Name
        </FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={value => setData({...formData, name: value})}
        />
        {'name' in errors ? (
          <FormControl.ErrorMessage>Name is Required</FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText>
            Name should contain atleast 3 character.
          </FormControl.HelperText>
        )}
      </FormControl>
      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
    </VStack>
  );
  // const image = {
  //   uri: 'https://imgs.search.brave.com/Ez-KKGXSP-GzkWokDjnkJhEN_SycSMESvPkycbJyX9s/rs:fit:267:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/LVJFWHBZWDY1QVhB/SUNoa05zdl9RSGFO/SiZwaWQ9QXBp',
  // };

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmedPassword, setConfirmedPassword] = useState('');
  // return (
  //   <ImageBackground
  //     source={image}
  //     resizeMode="cover"
  //     blurRadius={2}
  //     style={styles.bgImage}>
  //     <Center w="100%">
  //       <Box safeArea p="2" w="90%" maxW="290" py="8">
  //         <Heading
  //           size="lg"
  //           color="coolGray.800"
  //           _dark={{
  //             color: 'warmGray.50',
  //           }}
  //           fontWeight="semibold">
  //           Welcome
  //         </Heading>
  //         <Heading
  //           mt="1"
  //           color="coolGray.600"
  //           _dark={{
  //             color: 'warmGray.200',
  //           }}
  //           fontWeight="medium"
  //           size="xs">
  //           Sign up to continue!
  //         </Heading>
  //         <VStack space={3} mt="5">
  //           {/* Email  */}
  //           <FormControl>
  //             <FormControl.Label>Email</FormControl.Label>
  //             <Input onChangeText={val => setEmail(val)} value={email} />
  //             <FormControl.ErrorMessage
  //               leftIcon={<WarningOutlineIcon size="xs" />}>
  //               Something is wrong.
  //             </FormControl.ErrorMessage>
  //           </FormControl>
  //           {/* Password */}
  //           <FormControl>
  //             <FormControl.Label>Password</FormControl.Label>
  //             <Input
  //               type="password"
  //               onChangeText={val => setPassword(val)}
  //               value={password}
  //             />
  //           </FormControl>
  //           {/* Confirm Password */}
  //           <FormControl>
  //             <FormControl.Label>Confirm Password</FormControl.Label>
  //             <Input
  //               type="password"
  //               onChangeText={val => setConfirmedPassword(val)}
  //               value={confirmedPassword}
  //             />
  //           </FormControl>
  //           <Button
  //             mt="2"
  //             colorScheme="indigo"
  //             onPress={() =>
  //               validateInputs(email, password, confirmedPassword)
  //             }>
  //             Sign up
  //           </Button>
  //           <HStack mt="6" justifyContent="center">
  //             <Text
  //               fontSize="sm"
  //               color="coolGray.600"
  //               _dark={{
  //                 color: 'warmGray.200',
  //               }}>
  //               Already have an account?{' '}
  //             </Text>
  //             <Link
  //               _text={{
  //                 color: 'indigo.500',
  //                 fontWeight: 'medium',
  //                 fontSize: 'sm',
  //               }}
  //               // href="#"
  //               onPress={() => {
  //                 console.log('redirect to sign in screen');
  //               }}>
  //               Sign In
  //             </Link>
  //           </HStack>
  //         </VStack>
  //       </Box>
  //     </Center>
  //   </ImageBackground>
  // );
}
const validateInputs = (email, password, confirmedPassword) => {
  if (!email.match(/^([a-z\d.\_]{3,20})@([a-z]{5,10})\.([a-z]{3,10})$/i)) {
    console.log('invalid email');
  } else if (!password.match(/^[a-z\d]{8,15}$/i)) {
    console.log('invalid password');
  } else if (password !== confirmedPassword) {
    console.log('reenter password');
  } else {
    console.log('valid .. check if email exists on server');
  }
};
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
