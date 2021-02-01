import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import BookDonateScreen from '../screens/BookDonor';
import ReceiverDetails from '../screens/ReceiverDetails'

 export const AppStackNavigator = createStackNavigator ({
BookDonateList : {
screen: BookDonateScreen,
navigationOptions :{headerShown:false}
},

ReceiverDetails:{
screen:ReceiverDetails,
navigationOptions:{headerShown:false}
},



 },

 {initialRouteName:'BookDonateList'}
 )

