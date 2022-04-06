/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Center,
  Heading,
  VStack,
  Text,
  HStack,
  ScrollView,
  Box,
} from 'native-base';
import React from 'react';
import {WebView} from 'react-native-webview';
import {useEffect} from 'react';

export default function Topic({obj}) {
  obj = obj || {};

  const {heading, subText, example, note} = obj;

  const noteIndex = Math.ceil(Math.random() * (heading.length - 1));
  const exampleIndex = Math.ceil(Math.random() * (heading.length - 1));

  return (
    // <ScrollView indicatorStyle="white" flex="1">
    <Center w="100%">
      {heading.map((h, index) => {
        return (
          <VStack w="100%" key={index + ''} mt="6">
            <Box bg="#6FFFF220" p="5" rounded={'xl'}>
              <Heading color="info.100" mb="3" fontSize={'20'} fontWeight="700">
                {heading[index]}
              </Heading>
              {subText[index].map(text => (
                <Text color="info.100" mb="2" fontWeight="500">
                  {text}
                </Text>
              ))}
            </Box>
            {index === noteIndex && (
              <HStack
                bg="#6FFFF25f"
                maxW="100%"
                mt="5"
                p="5"
                //   borderTopLeftRadius={'60'}
                borderTopRightRadius={'50'}
                //   borderBottomRightRadius="60"
                borderBottomLeftRadius="50">
                <Text fontWeight="700" color="info.200" underline>
                  Note:
                </Text>
                <Text pr="5" pl="3" color="info.200" fontWeight="500">
                  {note}
                </Text>
              </HStack>
            )}
            {index === exampleIndex && (
              <WebView
                source={example}
                style={{
                  flex: 1,
                  marginTop: 20,
                  width: '100%',
                  height: 600,
                }}
              />
            )}
          </VStack>
        );
      })}
    </Center>
    // </ScrollView>
  );
}
