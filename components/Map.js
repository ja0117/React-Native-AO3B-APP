import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Axios from 'axios';


const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

class Map extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            markers: [],
        }
    }

    fetchData() {

        Axios.get('http://skyblock.nl/api/app/data/sensorlocation')
            .then(response => { 

                var data = [];

                for(let i = 0; i < response.data.length; i ++ ){

                    if(!response.data[i] == null)
                        continue;

                    data.push(response.data[i]);
                }

                this.state.markers = data;
                return data;

            }).catch(error => {
                console.log(error);
            });
        
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {

                console.log("Woookieees");
                console.log(position);

                this.setState ({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });

            },
            (error) => this.setState({error: error.message}),
            {enableHighAccuracy: true, timeout: 20000}
        );

        console.log(this.fetchData());
    }

    render() {
        return (
            <MapView
                style = {{flex: 1}}
                initialRegion={this.state.initialPosition}
            />
            
        );
    }
}


export default Map;