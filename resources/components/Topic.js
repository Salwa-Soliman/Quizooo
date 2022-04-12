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
import {Colors} from '../ColorPalete/styles';
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
          <VStack w="100%" key={index} mt="6">
            <Box
              bg={Colors.blue100 + '20'}
              borderColor={Colors.blue100 + '80'}
              borderWidth="1"
              p="5"
              rounded={'xl'}>
              <Heading
                // color={Colors.blue100}
                color={Colors.mainColor + 'c0'}
                mb="3"
                fontSize={'20'}
                fontWeight="700">
                {heading[index]}
              </Heading>
              {subText[index].map(text => (
                <Text color="info.100" mb="2.5" fontWeight="500">
                  {text}
                </Text>
              ))}
            </Box>
            {index === noteIndex && (
              <HStack
                // bg={Colors.orange300 + 'c0'}
                bg={Colors.mainColor + '40'}
                borderColor={Colors.mainColor + '80'}
                borderWidth={note ? '2' : '0'}
                maxW="100%"
                mt="5"
                p={note ? '5' : '0'}
                minH={note ? '50' : '0'}
                //   borderTopLeftRadius={'60'}
                borderTopRightRadius={'50'}
                //   borderBottomRightRadius="60"
                borderBottomLeftRadius="50">
                {note ? (
                  <>
                    <Text fontWeight="700" color="info.200" underline>
                      Note:
                    </Text>
                    <Text pr="5" pl="3" color="info.200" fontWeight="500">
                      {note}
                    </Text>
                  </>
                ) : null}
              </HStack>
            )}
            {index === exampleIndex && (
              <WebView
                source={example}
                style={{
                  flex: 1,
                  marginTop: 20,
                  width: '100%',
                  height: 500,
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
