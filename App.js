import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator'
import { AppDrawer} from './screens/AppDrawer'

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
/*WelcomeScreen:{screen: WelcomeScreen},*/
  Drawer : {screen:AppDrawer}
})

const AppContainer =  createAppContainer(switchNavigator);