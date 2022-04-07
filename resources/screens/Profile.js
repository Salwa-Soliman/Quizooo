/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component, useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from 'react-native';
import {Button, Heading} from 'native-base';
import {AuthContext} from '../store/auth-context';
import {Card} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StaggerComp from './Stagger';
import {ImageBackground} from 'react-native';
import {Colors} from '../ColorPalete/styles';

export default function UserProfileView({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lessonIndex, setLessonIndex] = useState(0);

  const toggleModal = visible => {
    setModalVisible(visible);
  };
  const authCtx = useContext(AuthContext);

  const getQuizzes = () => {
    return AsyncStorage.getItem('email').then(email => {
      setEmail(email);
      var username = email.substring(0, email.indexOf('@'));
      setName(username);
      firestore()
        .collection('Scores')
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
          var quizzes = [];
          querySnapshot.forEach(res => {
            const {email, quiz, score} = res.data();
            quizzes.push({email, quiz, score});
            setData(quizzes);
          });
        })
        .catch(e => console.log(e));

      firestore()
        .collection('Lessons')
        .doc(email)
        .get()
        .then(querySnapshot => {
          // eslint-disable-next-line dot-notation
          setLessonIndex(querySnapshot.data()['index']);
        });
    });
  };

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../assets/images/0150afa24b80b0a16a78fdf31b357701.jpg')}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View
              style={{
                height: 3,
                backgroundColor: Colors.main200,
                position: 'relative',
                top: 100,
              }}></View>
            <View style={styles.headerContent}>
              <Image
                style={styles.avatar}
                source={{
                  uri: 'https://i.pinimg.com/originals/3e/7a/ac/3e7aac434cbcd588608af125e7b88ef4.jpg',
                }}
              />

              <Text style={styles.name}> {name} </Text>
              <Text style={styles.userInfo}>{email}</Text>
            </View>
          </View>

          <ScrollView>
            <View style={{flex: 1}}>
              <FlatList
                horizontal={true}
                data={[{name: 'test'}]}
                renderItem={({item}) => (
                  <View style={styles.card}>
                    {/* <Heading textAlign="center">Progress</Heading> */}
                    <Card style={styles.cardback} title="Local Modules">
                      <Image
                        style={styles.trackimg}
                        source={{
                          uri: 'https://i.pinimg.com/originals/3e/7a/ac/3e7aac434cbcd588608af125e7b88ef4.jpg',
                        }}
                      />
                      <View
                        style={{
                          borderBottomColor: 'black',
                          borderBottomWidth: 1,
                        }}
                      />
                      <Text style={styles.paragraph}>
                        Lesson {lessonIndex + 1} of 5
                      </Text>

                      {/* <Text style={styles.paragraph}>
                      Score: {item.score}
                    </Text> */}
                    </Card>
                  </View>
                )}
              />
            </View>
          </ScrollView>

          <Text style={styles.completedparagraph}> Completed </Text>

          <ScrollView>
            <View style={{flex: 1}}>
              <FlatList
                horizontal={true}
                data={data}
                renderItem={({item}) => (
                  <View style={styles.card}>
                    <View style={styles.cardbackground} title="Local Modules">
                      <Image
                        style={styles.gradeimg}
                        source={{
                          uri: 'https://i.pinimg.com/originals/3e/7a/ac/3e7aac434cbcd588608af125e7b88ef4.jpg',
                        }}
                      />

                      <Text style={styles.gradeparagraph}>{item.quiz}</Text>
                      <Text style={styles.gradeparagraph}>
                        Score: {item.score}%
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
        <Button onPress={authCtx.logout}>Logout</Button>
      </ScrollView>
      <StaggerComp navigation={navigation} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: 'white',
    width: 250,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  header: {
    // backgroundColor: "#DCDCDC",
    // backgroundColor: '#211F39',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    backgroundColor: 'white',
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 6,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 50,
  },
  info: {
    fontSize: 18,
    marginTop: 50,
    color: '#6FFDBA',
  },
  grades: {
    fontSize: 18,
    marginTop: 50,
    color: '#6FFDBA',
    paddingLeft: 20,
  },
  back: {
    borderRadius: 20,
    color: 'white',
    padding: 10,
    elevation: 2,
    paddingLeft: 170,
    marginTop: 200,
  },
  modal: {
    flex: 1,
    backgroundColor: '#211F39',
  },

  trackimg: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    marginLeft: 25,
  },

  gradeimg: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginLeft: 15,
  },

  gradeparagraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },

  completedparagraph: {
    marginTop: 50,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.main200,
  },
});
