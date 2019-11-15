import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Home from './Home';
import Profile from './Profile';
import Feed from './Feed';

const FirstNavGroup = createSwitchNavigator({

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