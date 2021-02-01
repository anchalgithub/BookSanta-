import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Modal, KeyboardAvoidingView } from 'react-native';
import db from '../config'
import firebase from 'firebase'
import BookDonateScreen from '../screens/BookDonor';
import BookRequestScreen from '../screens/BookRequest';

export default class WelcomeScreen extends Component {
constructor(){
super();
this.state = {
emailId:'',
password:'',
isModalVisible:'false',
firstName: "",
lastName: "",
address:"",
contact:"",
confirmPassword:"",
}
}

userSignup=(emailId,password,confirmPassword)=>{
if(password!== confirmPassword){
return Alert.alert ("Password does not match\ncheck your password")
}else{
firebase.auth().createUserWithEmailAndPassword(emailId,password).then(()=>{
db.collection("users").add({
first_name: this.state.firstName,
last_name: this.state.lastName,
contact: this.state.contact,
email_Id: this.state.emailId,
address: this.state.address,
})
return Alert.alert("User Added Successfully", " ", [{text:"Okay", onPress:()=>this.setState({"isModalVisible":false})}])
})
.catch(function(error){
var errorCode = error.code;
var errorMessage = error.errorMessage;
return Alert.alert(errorMessage)
})
}
}

userLogin=(emailId,password)=>{
firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
this.props.navigation.navigate('BookDonor')
})
.catch(function(error){
var errorCode = error.code;
var errorMessage = error.errorMessage;
 return Alert.alert(errorMessage)
})
}

showModal=()=>{
return(
<Modal animationType="fade" transparent = {true} visible={this.state.isModalVisible}>

<View style = {styles.modalContainer}>

<ScrollView style = {{width:'100%'}}>
<KeyboardAvoidingView style = {styles.KeyboardAvoidingView}> 

<Text style = {styles.modalTitle}> Registration </Text>
<TextInput style = {styles.formTextInput} 
placeholder = {"First Name"}
maxLength = {8}
onChangeText = {(text)=>{
this.setState({firstName:text})
}}/>

<TextInput style = {styles.formTextInput} 
placeholder = {"Last Name"}
maxLength = {8}
onChangeText = {(text)=>{
this.setState({lastName:text})
}}/>

<TextInput style = {styles.formTextInput} 
placeholder = {"Contact"}
maxLength = {8}
keyboardType = {"numeric"}
onChangeText = {(text)=>{
this.setState({contact:text})
}}/>

<TextInput style = {styles.formTextInput} 
placeholder = {"Email Address"}
keyboardType = {'email-address'}
onChangeText = {(text)=>{
this.setState({emailId:text})
}}/>

<TextInput style = {styles.formTextInput} 
placeholder = {"Address"}
multiline={true}
onChangeText = {(text)=>{
this.setState({address:text})
}}/>

<TextInput style = {styles.formTextInput} 
placeholder = {"Password"}
secureTextEntry = {true}
onChangeText = {(text)=>{
this.setState({password:text})
}}/>

<TextInput style = {styles.formTextInput} 
placeholder = {"Confirm Password"}
secureTextEntry = {true}
onChangeText = {(text)=>{
this.setState({confirmPassword:text})
}}/>

<View style = {styles.ModalBackButton}>
<TouchableOpacity style = {styles.regButton} onPress = {()=>this.userSignup(this.state.emailId, this.state.password, this.state.confirmPassword)}>
<Text style = {styles.regButtonText}>Register</Text>
</TouchableOpacity>
</View>

<View style = {styles.ModalBackButton}>
<TouchableOpacity style = {styles.cancelButton} onPress = {()=>this.setState({"isModalVisible":false})}>
<Text style = {{color:'blue'}}>Cancel</Text>
</TouchableOpacity>
</View>

</KeyboardAvoidingView>
</ScrollView>

</View>
</Modal>
)
}

render(){
return(
<View style={styles.container}>
<View style={{justifyContent: 'center',alignItems: 'center'}}>

</View>{ this.showModal()}
<View style={{justifyContent:'center', alignItems:'center'}}>
<Text style={styles.title}>Book Santa</Text>
</View>

<View>
<TextInput
style={styles.loginBox}
placeholder="Username"
keyboardType ='email-address'
onChangeText={(text)=>{
this.setState({emailId: text})}}/>

<TextInput
style={styles.loginBox}
secureTextEntry = {true}
placeholder="Password"
onChangeText={(text)=>{
this.setState({password: text})}}/>
      
<TouchableOpacity
style={[styles.button,{marginBottom:20, marginTop:20}]}
onPress = {()=>{
this.userLogin(this.state.emailId, this.state.password)
}}>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={()=>this.setState({ isModalVisible:true})}>
<Text style={styles.buttonText}>Sign Up</Text>
</TouchableOpacity>
</View>
</View>

)
}
}

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'white'
},

title:{
fontSize:30,
fontFamily: 'bold',
color: 'blue',
marginLeft:25
},

loginBox:{
width:300,
height:50,
margin:20,
justifyContent:'center',
alignItems:'center',
backgroundColor:'turquoise',
borderRadius:25,
shadowColor:'blue',
shadowOffset:{
width:0,
height:8
},
shadowOpacity:0.3,
shadowRadius:10.3,
elevation:60
},

button:{
borderWidth:2,
width:"60%",
marginLeft:70,
borderRadius:9,
height:25
},
        
buttonText:{
fontFamily: 'Times New Roman',
marginLeft:70,
fontSize:20,
},

KeyboardAvoidingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalTitle :{
    justifyContent:'center',
    alignSelf:'center',
    fontSize:30,
    color:'#ff5722',
    margin:50
  },
  modalContainer:{
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ffff",
    marginRight:30,
    marginLeft : 30,
    marginTop:80,
    marginBottom:80,
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  regButton:{
    width:200,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:10,
    marginTop:30
  },
  regButtonText:{
    color:'#ff5722',
    fontSize:15,
    fontWeight:'bold'
  },
  cancelButton:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
  },
 

})

