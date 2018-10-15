import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Show from './components/Show';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View> 
          <Text>Senshagen</Text>
        </View>

        <Show/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b99fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});