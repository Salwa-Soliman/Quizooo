/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Heading, View, Text, Center, ScrollView} from 'native-base';
import StaggerComp from './Stagger';
import {ImageBackground} from 'react-native';
import {Colors} from '../ColorPalete/styles';

export default function Privacy({navigation}) {
  const arr = [
    {
      title: '1. About this Notice',
      content:
        'This Privacy and Cookie Notice provides information on how Quizo collects and processes your personal data when you visit our website or mobile applications.',
    },
    {
      title: '2. The data we collect about you',
      content:
        'We collect your personal data in order to provide and continually improve our products and services.',
    },
    {
      title: '3. Cookies and how we use them',
      content:
        'A cookie is a small file of letters and numbers that we put on your computer if you agree. Cookies allow us to distinguish you from other users of our website and mobile applications, which helps us to provide you with an enhanced browsing experience.',
    },
    {
      title: '4. International transfers',
      content:
        'We may transfer your personal data to locations in another country, if this is permissible pursuant to applicable laws in your location. There are inherent risks in such transfers. I the event of international transfers of your personal data, we shall put in place measures necessary to protect your data, and we shall continue to respect your legal rights pursuant to the terms of this Privacy and Cookie Notice and applicable laws in your location.',
    },
    {
      title: '5. Data security',
      content:
        'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.',
    },
    {
      title: '6. Your legal rights',
      content:
        'It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us. Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to access, correct or erase your personal data, object to or restrict processing of your personal data, and unsubscribe from our emails and newsletters.',
    },
    {
      title: '7. Further details',
      content:
        'If you are looking for more information on how we process your personal data, or you wish to exercise your legal rights in respect of your personal data, please contact',
    },
  ];
  return (
    <>
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        resizeMode="cover"
        // blurRadius={2}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView safeArea p="2" w="100%" py="8" px="8">
          <Heading textAlign={'center'} mb="3" color={Colors.mainColor + 'c0'}>
            Privacy
          </Heading>

          {/* hr  */}
          <View
            borderRadius={'xl'}
            style={{
              height: 2,
              backgroundColor: Colors.mainColor + 'c0',
            }}
          />
          {arr.map((q, i) => (
            <View
              key={i}
              bg={Colors.blue100 + '20'}
              borderColor={Colors.blue100 + '80'}
              p="5"
              borderWidth="1"
              // p="2"
              rounded={'xl'}
              mt="5">
              <Text
                color={Colors.mainColor + 'c0'}
                style={{
                  fontSize: 20,
                  marginBottom: 10,
                }}>
                {q.title}
              </Text>
              <Text style={{color: 'white'}}>{q.content}</Text>
            </View>
          ))}
        </ScrollView>
        <StaggerComp navigation={navigation} />
      </ImageBackground>
    </>
  );
}
