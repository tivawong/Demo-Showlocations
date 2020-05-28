import React, { useState, useEffect } from 'react';
import { Text, View, } from 'react-native';

import MapView from 'react-native-maps';
import { Location, Permission } from 'expo';

import Tabbar from '../../components/Tabbar';


const Home = props => { 
           
    return (   
        <View style={{flex: 1}}>
            <View style={{ flex: 0.09 }}>
                <Text style={{}}>Map</Text>
            </View>
            <View style={{flex: 1,borderWidth:1}}>
                <MapView
                    style={{width:'100%', height: '100%'}}
                    showsUserLocation={true} 
                    followsUserLocation
                    showsTraffic={true} 
                    initialRegion={{
                        latitude: 13.728993, 
                        longitude: 100.528075,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>

            <View style={{ flex: 0.09 }}>
                <Tabbar navigation={props.navigation} col={"Home"} />
            </View>
        </View>
    )
}

export default Home;