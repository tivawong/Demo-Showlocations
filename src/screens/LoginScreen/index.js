import React, { useContext } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

const Login = props => {

    return (   
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <View style={{alignItems:'center', marginTop:100}}>
                    <Image 
                        style={{width: 180, height:180}}
                        source={require('../../images/code.png')} 
                    />
                </View>
                <TouchableOpacity 
                    style={{borderWidth:0.6,margin:50,marginTop:130,height:80,borderRadius:20}}
                    onPress={props.onPressGG()}
                >   
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Image 
                            style={{width: 65, height: 65,marginTop: 7}}
                            source={require('../../images/google-logo.png')} 
                        />
                        <Text style={{fontFamily:'CSChatThai', fontSize: '25',marginTop:8,marginLeft:8,alignSelf:'center',color:'#000080'}}>Sign in with Google +</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login;