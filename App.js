import React from 'react';
import { StyleSheet, Text, View,Dimensions, Image } from 'react-native';
import Map from './components/Map';
import Graph from './components/Graph';
import Footer from './components/Footer';

var {height, width} = Dimensions.get('window'); //REEEEEEEEEEEEEEEEEEE
export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      test: "fgd fg",
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
         <View style={styles.map}><Map /></View>

         <View style={styles.waarde}><Text>waarde 1</Text></View>
         <View style={styles.waarde}><Text>waarde 2</Text></View>
         <View style={styles.waarde}><Text>waarde 3</Text></View>

         <View style={styles.graph}><Graph /></View> 

         <View style={{width: width}}><Footer authors="Sven Tjeerdsma - Jelle Huiberts - Joshua Altena " copyright="©" alternativepeople="Fifa champ Mike de weert" /></View>
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
    height: '10%',
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: 50,
    color: "#476DB7",
  },
  container: {
    backgroundColor: 'white',
    top: '3%',
    flex: 12,
    alignItems: 'center',
  },
  graph: {
    backgroundColor: 'white',
    height: '20%',
    width: '100%',
  },
  map: {
    backgroundColor: 'gray',
    height:'30%',
    width: '100%',
  },
  waarde: {
    height: '10%',
    width: '100%',
  },
});
