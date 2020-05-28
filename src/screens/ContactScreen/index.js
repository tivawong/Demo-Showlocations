import React, { useContext } from 'react';
import { Text, 
    View, 
} from 'react-native';

import Tabbar from '../../components/Tabbar';

const Contact = props => {

    return (   
        <View style={{flex: 1}}>
            <View style={{flex: 1,borderWidth:1}}>
            
            </View>

            <View style={{ flex: 0.09 }}>
                <Tabbar navigation={props.navigation} col={"Contact"} />
            </View>
        </View>
    )
}

export default Contact;