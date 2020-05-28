import React, { useContext } from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity,Image } from 'react-native';

const Login = props => {
    return (   
        <View style={{flex: 1}}>
            <View style={{flex: 1,borderWidth:1,alignItems: 'center',justifyContent: 'center',}}>
                <TouchableOpacity
                    
                >
                    <Image 
                        source={require('../../images/google-plus.png')}
                    />
                    <Text>Google</Text>
                </TouchableOpacity>
            </View>
        </View>
}
export default Login;