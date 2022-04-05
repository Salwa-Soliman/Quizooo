import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';

export default function Tracks({navigation}) {
  let traccks = [
    {
      image: require('../assets/front.jpg'),
      cources: [
        {name: 'HTML', image: require('../assets/html.jpg'), code: '3QN3'},
        {name: 'CSS', image: require('../assets/html.jpg'), code: '3QN3'},
        {name: 'Bootstrap', image: require('../assets/html.jpg'), code: '3QN3'},
        {
          name: 'JavaScript',
          image: require('../assets/html.jpg'),
          code: 'X9QW',
        },
      ],
      margin: 0,
      trackName: 'FrontEnd',
    },
    {
      image: require('../assets/backr.png'),
      cources: [
        {name: 'C#', image: require('../assets/html.jpg'), code: '3QN3'},
        {name: 'PHP', image: require('../assets/html.jpg'), code: '3QN3'},
        {name: 'Laravel', image: require('../assets/html.jpg'), code: '3QN3'},
        {name: '.NET', image: require('../assets/html.jpg'), code: '3QN3'},
      ],
      margin: 50,
      trackName: 'BackEnd',
    },
    {
      image: require('../assets/backr.png'),
      cources: [
        {name: 'HTML', image: require('../assets/html.jpg'), code: '3QN3'},
        {name: 'CSS', image: require('../assets/html.jpg'), code: '3QN3'},
        {name: '.NET', image: require('../assets/html.jpg'), code: '3QN3'},
        {name: 'Laravel', image: require('../assets/html.jpg'), code: '3QN3'},
      ],
      margin: 0,
      trackName: 'FullStack',
    },
    {
      image: require('../assets/backr.png'),
      cources: [
        {name: 'C', image: require('../assets/html.jpg'), code: '3QN3'},
        {
          name: 'Embedded C',
          image: require('../assets/html.jpg'),
          code: '3QN3',
        },
        {
          name: 'Interfacing',
          image: require('../assets/html.jpg'),
          code: '3QN3',
        },
        {name: 'RTOS', image: require('../assets/html.jpg'), code: '3QN3'},
      ],
      margin: 50,
      trackName: 'EmbededSystem',
    },
  ];

  let navigateToCources = data => {
    console.log(data.cources);
    navigation.navigate('Quizzes', data.cources);
  };
  return (
    <ScrollView style={{backgroundColor: '#ddd', padding: 14}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        {traccks.map(item => {
          return (
            <View
              style={{marginTop: item.margin, width: 180}}
              key={item.trackName}>
              <TouchableOpacity
                onPress={() => navigateToCources({cources: item.cources})}
                style={{
                  borderColor: '#1A1B4B',
                  borderWidth: 5,
                  margin: 9,
                  borderRadius: 20,
                  backgroundColor: '#3E4491',
                }}>
                <View>
                  <Image
                    source={item.image}
                    style={{
                      width: '100%',
                      height: 150,
                      borderRadius: 15,
                      flex: 1,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: '#fff',
                      padding: 10,
                    }}>
                    {item.trackName}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

// source={require('../assets/3.png')}
{
  /* <View style={{ flex: 2 ,marginTop:50}}>
<TouchableOpacity  style={{ borderColor:'#1A1B4B',borderWidth:5,margin:9,borderRadius: 20 ,backgroundColor:'#3E4491'}}>
<View>
<Image
source={require('../assets/3.png')}
style={{ width: '100%', height: 150,borderRadius: 15 ,flex:1}}
/>
</View>
<View>
    <Text
      style={{ fontSize: 17,  fontWeight: "bold",textAlign:'center' ,color:'#fff',padding:10}}
    >
      Course Titel
    </Text>

 
  </View>
</TouchableOpacity>
</View> */
}
