import React,{Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';


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
    this.state = {u:require('../images/dice1.png')};
    this.press=this.press.bind(this);
  }

  press=e=>{
    let i=Math.ceil(Math.random()*6);
    if(i==1)this.setState({u:require(`../images/dice1.png`)});
    else if(i==2)this.setState({u:require(`../images/dice2.png`)});
    else if(i==3)this.setState({u:require(`../images/dice3.png`)});
    else if(i==4)this.setState({u:require(`../images/dice4.png`)});
    else if(i==5)this.setState({u:require(`../images/dice5.png`)});
    else if(i==6)this.setState({u:require(`../images/dice6.png`)});
  }

  render(){
    return(
      <View>
      <Image source={this.state.u}/>
      <TouchableOpacity onPress={this.press}>
      <Text style={s.gb}>Play Game</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
