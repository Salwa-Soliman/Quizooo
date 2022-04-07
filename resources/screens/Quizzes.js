/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Box, Button, Center, HStack, VStack} from 'native-base';
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import StaggerComp from './Stagger';
import {Colors} from '../ColorPalete/styles';

export default function Quizzes({navigation, route}) {
  let cources = route.params;
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../assets/images/0150afa24b80b0a16a78fdf31b357701.jpg')}
      style={{
        flex: 1,
      }}>
      {/* bg={Colors.main100} */}
      <Center>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              textAlign: 'center',
              color: Colors.main200,
              padding: 20,
              fontSize: 25,
              fontWeight: 'bold',
              flex: 1,
            }}>
            Let's Start
          </Text>

          <View
            style={{
              flex: 4,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            {cources.map((item, index) => {
              return (
                <View
                  style={{
                    width: 180,
                    // height: 200,
                    marginBottom: 40,
                  }}
                  key={item.name}>
                  <Box
                    style={{flex: 1}}
                    onPress={() => {
                      navigation.navigate('SingleQuestion', {
                        quizCode: item.code,
                        quizName: item.name,
                      });
                    }}>
                    <View
                      // shadow={'2'}
                      style={{
                        margin: 9,
                        backgroundColor: Colors.main300 + '40',
                        flex: 1,
                        borderRadius: 20,
                        padding: 15,
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
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: Colors.main200,
                          marginTop: 10,
                          marginBottom: 5,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    <HStack justifyContent={'space-between'} mt="3">
                      <Button
                        bg={Colors.main200 + '6f'}
                        rounded={'xl'}
                        w={'75'}
                        onPress={() => {
                          navigation.navigate('LearningPaths', {
                            selectedTutorial: item.name.toLowerCase(),
                          });
                        }}>
                        <Text
                          style={{fontWeight: 'bold', color: Colors.main100}}>
                          Tutorial
                        </Text>
                      </Button>
                      <Button
                        bg={Colors.main200 + '6f'}
                        rounded={'xl'}
                        w={'75'}
                        onPress={() => {
                          navigation.navigate('SingleQuestion', {
                            quizCode: item.code,
                            quizName: item.name,
                          });
                        }}>
                        <Text
                          style={{fontWeight: 'bold', color: Colors.main100}}>
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
      </Center>
    </ImageBackground>
  );
}
