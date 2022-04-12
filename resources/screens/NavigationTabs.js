/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Profile from './Profile';
import HomePage from './HomePage';
import Tracks from './Tracks';
import {Colors} from '../ColorPalete/styles';

export default function NavigationTabs({navigation}) {
  const layout = useWindowDimensions();

  const FirstRoute = () => (
    <HomePage setIndex={setIndex} navigation={navigation} />
  );
  const SecondRoute = () => <Tracks navigation={navigation} />;
  const ThirdRoute = () => <Profile navigation={navigation} />;
  // const ForthRoute = () => <LearningPaths navigation={navigation} />;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Home'},
    {key: 'second', title: 'Tracks'},
    {key: 'third', title: 'Profile'},
    // {key: 'forth', title: 'LearningPaths'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    // forth: ForthRoute,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={Colors.mainColor}
      inactiveColor={Colors.mainColor + '80'}
      style={{
        backgroundColor: '#000',
        paddingVertical: 10,
        // fontWeight: 'bold',
      }}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
