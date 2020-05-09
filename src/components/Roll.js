import React,{Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';


const s=StyleSheet.create({
  gb:{
    fontSize:20,
    marginTop:100,
    color:'white',
    fontWeight:'bold',
    borderWidth:2,
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:10,
    borderColor:'white',
    textAlign:'center'
  }
});


export default class Roll extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.press=this.press.bind(this);
  }


  press=e=>Alert.alert('Make roll function')


  render(){
    return(
      <View>
      <Image source={require('../images/dice3.png')}/>
      <TouchableOpacity onPress={this.press}>
      <Text style={s.gb}>Play Game</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
