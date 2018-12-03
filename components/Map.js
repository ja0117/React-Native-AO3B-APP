import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

class Map extends Component {
    render() {
        return (
            <MapView 
                style = {{ flex: 1 }}
                initialRegion= {{
                    latitude: 52.5351226,
                    longitude: 6.0453339,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009
                }}
            />
        );
    }
}


export default Map;