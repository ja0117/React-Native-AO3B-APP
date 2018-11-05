import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

class Map extends Component {
    render() {
        return (
            <MapView 
                style = {{ flex: 1 }}
                initialRegion= {{
                    latitude: 15.8080,
                    longitude: 15.0808,
                    latitudeDelta: 0.092,
                    longitudeDelta: 0.0421
                }}
            />
        );
    }
}


export default Map;