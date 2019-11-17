import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Home';
import Profile from './Profile';
import Feed from './Feed';

const FirstNavGroup = createBottomTabNavigator({

  HomeScreen:{
    screen: Home,
  },
  FeedScreen:{
    screen: Feed
  },
  ProfileScreen:{
    screen: Profile
  }
},
{
  initialRouteName:'HomeScreen'
})

export default createAppContainer(FirstNavGroup)