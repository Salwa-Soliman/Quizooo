import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Colors from '../ColorPalete/styles';
import Profile from './Profile';
import HomePage from './HomePage';
import Tracks from './Tracks';
import Quizzes from './Quizzes';
// import LearningPaths from './LearningPaths';

const FirstRoute = () => <HomePage />;
const SecondRoute = () => <Tracks />;
const ThirdRoute = () => <Profile />;
// const ForthRoute = () => <Quizzes />;

export default function NavigationTabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Home'},
    {key: 'second', title: 'Tracks'},
    {key: 'third', title: 'Profile'},
    // {key: 'forth', title: 'Quizzes'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    // forth: ForthRoute,
  });
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
