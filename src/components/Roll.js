import React,{Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';


export default class Roll extends Component {
  render(){
    return(
      <View>
      <Image source={require('../images/dice3.png')}/>
      </View>
    );
  }
}
