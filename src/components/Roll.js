import React,{Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';


const s=StyleSheet.create({
  gb:{
    fontSize:20,
    marginTop:50,
    color:'white',
    fontWeight:'bold',
    borderWidth:2,
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:10,
    borderColor:'white',
    textAlign:'center',
    backgroundColor:'orange'
  }
});


export default class Roll extends Component {
  constructor(props){
    super(props);
    this.state = {
      u1:require('../images/dice1.png'),
      u2:require('../images/dice1.png')
    };
    this.press=this.press.bind(this);
  }

  press=e=>{
    let i,j;
    i=Math.ceil(Math.random()*6);
    if(i==1)this.setState({u1:require(`../images/dice1.png`)});
    else if(i==2)this.setState({u1:require(`../images/dice2.png`)});
    else if(i==3)this.setState({u1:require(`../images/dice3.png`)});
    else if(i==4)this.setState({u1:require(`../images/dice4.png`)});
    else if(i==5)this.setState({u1:require(`../images/dice5.png`)});
    else if(i==6)this.setState({u1:require(`../images/dice6.png`)});
    j=Math.ceil(Math.random()*6);
    if(j==1)this.setState({u2:require(`../images/dice1.png`)});
    else if(j==2)this.setState({u2:require(`../images/dice2.png`)});
    else if(j==3)this.setState({u2:require(`../images/dice3.png`)});
    else if(j==4)this.setState({u2:require(`../images/dice4.png`)});
    else if(j==5)this.setState({u2:require(`../images/dice5.png`)});
    else if(j==6)this.setState({u2:require(`../images/dice6.png`)});
  }

  render(){
    return(
      <View>
      <Image source={this.state.u1} style={{width:200,height:200}}/>
      <Image source={this.state.u2} style={{width:200,height:200,marginTop:50}}/>
      <TouchableOpacity onPress={this.press}>
      <Text style={s.gb}>Play Game</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
