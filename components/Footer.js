import React, { Component } from 'react';
import {View,Text, StyleSheet,} from 'react-native';
export default Footer = (props) => 
{
    return <View style={styles.container}>
        <Text style={styles.text}>{props.authors}</Text>
        <Text style={styles.altText}>{props.alternativepeople} </Text>
        
        <Text style={styles.text}>{props.copyright} </Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    text: {
        fontSize: 10,
        color: "#476DB7",
      },
      altText: {
        fontSize: 5,
        color: "#476DB7",
      },
});