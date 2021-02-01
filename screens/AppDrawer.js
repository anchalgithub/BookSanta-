import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from '../components/AppTabNavigator';
import CustomMenu from '../components/customMenu';
import Settings from '../screens/SettingScreen';
import MyDonationsScreen from '../screens/MyDonationsScreen'

export const AppDrawer = createDrawerNavigator({
Home : {
screen: AppTabNavigator
},

MyDonations :{
screen: MyDonationsScreen 
},


Settings:{
screen: Settings
},
},

{contentComponent:CustomMenu},
{initialRouteName : 'Home'}


)
