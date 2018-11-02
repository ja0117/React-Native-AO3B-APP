import React from 'react';
import { StyleSheet, Text, View,Dimensions, Image } from 'react-native';
import Chart from './components/Chart';
import Graph from './components/Graph';
import Footer from './components/Footer';

var {height, width} = Dimensions.get('window'); //REEEEEEEEEEEEEEEEEEE
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
         <View style={styles.title}><Text style={styles.text}>SensHagen</Text>
         <Image
           style={{width: 50, height: 50}}
            source={require('../React-Native-AO3B-APP/images/zwolle.jpg')}
          />
         </View>
         <View><Chart /></View>
         <View>
           <Text>waarde 1</Text>
         </View>
         <View></View>
         <View><Graph /></View> 
         <View><Footer authors="sven" /></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  title: {
    backgroundColor: 'white',
    width: width,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 50,
    color: "#476DB7",
  },
  container: {
    backgroundColor: 'red',
    top: 25,
    flex: 12,
    alignItems: 'center',
  },
});
