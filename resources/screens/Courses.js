/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Box, Button, Center, HStack, VStack} from 'native-base';
import React from 'react';
import {ScrollView, Text, Image, ImageBackground} from 'react-native';
import StaggerComp from './Stagger';
import {Colors} from '../ColorPalete/styles';

export default function Courses({navigation, route}) {
  let cources = route.params;
  return (
    //
    // <Center flex="1"  bg={Colors.bgColor}>
    <ImageBackground
      resizeMode="cover"
      source={require('../assets/images/bg.jpg')}
      style={{
        flex: 1,
        paddingBottom: 20,
      }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 20}}>
        {/* <Text
          style={{
            textAlign: 'center',
            color: Colors.mainColor + 'c0',
            // color: Colors.orange300,
            // color: Colors.blue300,
            padding: 20,
            fontSize: 25,
            fontWeight: 'bold',
            flex: 1,
          }}>
          Let's Start
        </Text> */}

        <View
          style={{
            flex: 4,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          {cources.map((item, index) => {
            return (
              <View
                mb="6"
                style={{
                  width: 180,
                  // height: 200,
                  // marginBottom: 40,
                }}
                key={item.name}>
                <Box style={{flex: 1}} alignItems="center">
                  <View
                    style={{
                      margin: 9,
                      backgroundColor: '#fff',
                      flex: 1,
                      borderRadius: 20,
                      padding: 15,
                      paddingBottom: 0,
                      maxWidth: 140,
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      alt="test"
                      style={{
                        maxWidth: '100%',
                        height: 100,
                      }}
                    />
                    <View
                      style={{
                        width: 140,
                        paddingVertical: 7,
                        marginLeft: -15,
                        marginTop: 15,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        backgroundColor: Colors.blue300,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: '#fff',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </View>

                  {/* Tutorial & quiz Buttons  */}
                  <HStack justifyContent={'space-between'} mt="2" w="100%">
                    <Button
                      // bg={Colors.orange300}
                      bg={Colors.mainColor + '40'}
                      borderWidth="2"
                      borderColor={Colors.mainColor + '80'}
                      colorScheme={Colors.blue100}
                      rounded={'xl'}
                      onPress={() => {
                        navigation.navigate('Tutorial', {
                          selectedTutorial: item.name.toLowerCase(),
                          quizCode: item.code,
                          quizName: item.name,
                        });
                      }}>
                      <Text style={{fontWeight: 'bold', color: Colors.main100}}>
                        Tutorial
                      </Text>
                    </Button>
                    <Button
                      // bg={Colors.orange300}
                      bg={Colors.mainColor + '40'}
                      borderWidth="2"
                      borderColor={Colors.mainColor + '80'}
                      colorScheme={Colors.blue100}
                      rounded={'xl'}
                      w={'75'}
                      onPress={() => {
                        navigation.navigate('SingleQuestion', {
                          quizCode: item.code,
                          quizName: item.name,
                        });
                      }}>
                      <Text style={{fontWeight: 'bold', color: Colors.main100}}>
                        Quiz
                      </Text>
                    </Button>
                  </HStack>
                </Box>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <StaggerComp navigation={navigation} />
    </ImageBackground>
    // </Center>
  );
}
