import React from 'react';
import {Image } from 'react-native';
import WriteScreen from './screens/writeScreen'
import ReadScreen from './screens/readScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return (
        <AppContainer/>
    );
  } 
}

const TabNavigator=createBottomTabNavigator({
  writeStory:{screen:WriteScreen},
  readStory:{screen:ReadScreen},
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon:() => {
      const routeName=navigation.state.routeName
      if(routeName === 'readStory')
      {
        return(<Image source={require('./assets/read.png')}
        style = {{width: 40, height: 40}}/>)
  
      }else if (routeName === 'writeStory')
      {
        return(<Image source={require('./assets/write.png')}
        style = {{width: 40, height:40}}/>)
      }
    }
})
});

const AppContainer=createAppContainer(TabNavigator)
  