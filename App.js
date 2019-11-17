import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './components/screen/Home';
import Profile from './components/screen/Profile';
import Feed from './components/screen/Feed';

const FirstNavGroup = createStackNavigator({


  HomeScreen:{
    screen: Home,
    navigationOptions:()=>({
      title:'Home'
    })
  },
  FeedScreen:{
    screen: Feed,
  },
  ProfileScreen:{
    screen: Profile,
    navigationOptions:()=>({
      headerStyle:{
        backgroundColor:'#0984e3'
      }
    }),
    
  }
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

export default createAppContainer(FirstNavGroup)