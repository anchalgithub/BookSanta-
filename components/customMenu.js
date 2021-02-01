import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity, } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import db from '../config'
import { ImageBackground } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen'

export default class CustomMenu extends Component {
render(){
return(
<View style = {{flex:1}}>
<View style = {styles.DI}>
<DrawerItems {...this.props}/>
</View>

<View style = {styles.logout}>
<TouchableOpacity style = {styles.logoutButton} 
onPress = {()=>{
this.props.navigation.navigate ('WelcomeScreen')
firebase.auth.signOut();
}}> 
<Text>Log out</Text>
</TouchableOpacity>  
</View>






</View>
)
}
}

const styles = StyleSheet.create({
DI:{
flex:1,
backgroundColor:'white'
},

logout:{
flex:0.5,
},

logoutButton:{
borderWidth:2,
backgroundColor:'turquoise'
}

})