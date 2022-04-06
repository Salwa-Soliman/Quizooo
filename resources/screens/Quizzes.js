import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import StaggerComp from './Stagger';

export default function Quizzes({navigation, route}) {
  let cources = route.params;

  return (
    <>
      <ScrollView style={{backgroundColor: '#3E4491'}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            padding: 20,
            fontSize: 40,
            fontWeight: 'bold',
            flex: 1,
          }}>
          Let's Start
        </Text>

        <View
          style={{
            flex: 4,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}>
          {cources.map((item, index) => {
            return (
              <View
                style={{width: 140, height: 140, marginBottom: 20}}
                key={item.name}>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => {
                    navigation.navigate('SingleQuestion', {
                      quizCode: item.code,
                      quizName: item.name,
                    });
                  }}>
                  <View
                    style={{
                      borderColor: '#1A1B4B',
                      borderWidth: 5,
                      margin: 9,
                      borderRadius: 20,
                      flex: 1,
                    }}>
                    <Image
                      // source={require('../assets/1.jpg')}
                      source={item.image}
                      alt="test"
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
                        marginTop: 10,
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <StaggerComp navigation={navigation} />
    </>
  );
}
{
  /* <TouchableOpacity
style={{margin:20,backgroundColor:'#fff',borderRadius:20,padding:10, marginBottom: 5, borderEndWidth:"none",flex:2}}

> 

<View style={{ flex: 3}}>
<View style={{ flex: 1 }}>
<Image
source={require('../assets/1.jpg')}
style={{ width: "100%", height: 80, borderRadius: 20 }}
/>
</View>
  <View style={{ flex: 2, paddingLeft: 15, paddingTop: 10 }}>
    <Text
      style={{ fontSize: 20, marginBottom: 10, fontWeight: "bold" }}
    >
      Course Titel
    </Text>

 
  </View>

</View> */
}
// </TouchableOpacity>

//   <View style={GlopalStyel.container}>
//   <Text style={GlopalStyel.text}>
//     Screen B
//     </Text>

// </View>

{
  /* <View style={{ flex: 2 }}>
<TouchableOpacity >
<View style={{ borderColor:'#005028',borderWidth:5,margin:9,borderRadius: 20 }}>
<Image
source={require('../assets/1.jpg')}
style={{ width: '100%', height: 150,borderRadius: 15 ,flex:1}}
/>
</View>
<View>
    <Text
      style={{ fontSize: 17,  fontWeight: "bold",textAlign:'center' ,color:'#fff',marginTop:10}}
    >
      Course Titel
    </Text>

 
  </View>
</TouchableOpacity>
</View> */
}

//   const [isLoading, setLoading] = useState(true);
// // console.log( test1);
//  let [arr,setArr]=useState([])

//       useEffect(() => {
//      setArr(cources)
//      setLoading(false)
//     }, []);
