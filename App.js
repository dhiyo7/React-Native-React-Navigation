import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Home';
import Profile from './Profile';
import Feed from './Feed';

const FirstNavGroup = createBottomTabNavigator({

  NewScreen:{
    screen: Feed,
  },
  ProfileScreen:{
    screen: Profile
  }
},
{
  initialRouteName:'NewScreen'
})

const SecondNavGroup = createSwitchNavigator({


  HomeScreen:{
    screen: Home,
  },
  FeedScreen:{
    screen: FirstNavGroup
  },

},{
  initialRouteName: 'HomeScreen'
})

export default createAppContainer(SecondNavGroup)