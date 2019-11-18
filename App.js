import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import {Image, Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './components/screen/Home';
import Profile from './components/screen/Profile';
import Feed from './components/screen/Feed';
import Friend from './components/screen/Friend';

const FirstNavGroup = createStackNavigator({

  HomeScreen:{
    screen: Home,
    
  },

  FeedScreen:{
    screen: Feed,
    navigationOptions:()=>({
      title:'Feed',
    })
  },
  
},
{
  initialRouteName:'HomeScreen',
  defaultNavigationOptions:()=>({
    title:'PLUGIN',
    headerStyle:{
      backgroundColor:'#0984e3'
    },
    headerTintColor:'white',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }),
  headerLayoutPreset:'center'
  
})

const SecondNavGroup = createStackNavigator({
  ProfileScreen:{
    screen: Profile,
    
  },
  FriendScreen:{
    screen: Friend,
    navigationOptions:()=>({
      title:'Friend',
    })
  }
},{
  initialRouteName:'ProfileScreen',
  defaultNavigationOptions:()=>({
    title:'PLUGIN',
    headerStyle:{
      backgroundColor:'#0984e3'
    },
    headerTintColor:'white',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }),
  headerLayoutPreset:'center'
})

const ThirdNavGroup = createBottomTabNavigator({
  FirstNavGroup:{
    screen: FirstNavGroup,
    navigationOptions:({navigation}) =>({
      tabBarLabel:"Home",
      tabBarIcon :({focused, tintColor}) =>{
        return <Icon name="home" size={20} color={tintColor}/>
      }
    })
  },
  SecondNavGroup:{
    screen: SecondNavGroup,
    navigationOptions:({navigation}) =>({
      tabBarLabel:"Profile",
      tabBarIcon :({focused, tintColor}) =>{
        return <Icon name="user" size={20} color={tintColor}/>
      }
    })
  }
})

export default createAppContainer(ThirdNavGroup)