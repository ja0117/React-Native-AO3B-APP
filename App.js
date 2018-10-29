import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Chart from './components/Chart';
import Graph from './components/Graph';
import Footer from './components/Footer';

var {height, width} = Dimensions.get('window');
export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      test: "fgdfg",
    };
  }
  render() {
    console.log(height);
    return (
      <View style={styles.container}>
         <View style={styles.title}><Text>titel</Text></View>
         <View><Chart /></View>
         <View><Text>waarde 1</Text></View>
         <View></View>
         <View><Graph /></View> 
         <View><Footer authors="sven" /></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  // title: {
  //   display: 'flex',
  //   flex: 11,
  //   // backgroundColor: 'black',
  // },
  // container: {
  //   top: 25,
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  // },
});
