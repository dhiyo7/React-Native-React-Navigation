import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import {Image, Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './components/screen/Home';
import Profile from './components/screen/Profile';
import Feed from './components/screen/Feed';

const FirstNavGroup = createBottomTabNavigator({

  HomeScreen:{
    screen: Home,
    navigationOptions:({navigation}) => ({
      tabBarLabel:"Home",
      tabBarIcon : ({focused, tintColor}) => {
          return <Icon name="home" size={20}  color={tintColor}  />
      }
  })
  },

  FeedScreen:{
    screen: Feed,
    navigationOptions:({navigation}) => ({
      tabBarLabel:"Feed",
      tabBarIcon:({focused, tintColor}) => {
        return <Icon name="android" size={20} color={tintColor}/>
      }
    })
  },
  ProfileScreen:{
    screen: Profile,
    navigationOptions:({navigation}) => ({
      tabBarLabel:"Profile",
      tabBarIcon:({focused, tintColor}) => {
        return <Icon name="user" size={20} color={tintColor}/>
      }
    })
  }
},
{
  initialRouteName:'HomeScreen',
  tabBarOptions:{
    activeTintColor:'blue',
    shadowColor: 'blue',
    // activeBackgroundColor:'#0984e3',
    showLabel:true,

    // style:{
    //   backgroundColor:'#81ecec'
    // } men bottom due backgorund
  }
  
})

export default createAppContainer(FirstNavGroup)