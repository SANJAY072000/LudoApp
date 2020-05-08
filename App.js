import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Roll from './src/components/Roll'


export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Roll/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
