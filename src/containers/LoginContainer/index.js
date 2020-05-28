
import React from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


import LoginScreen from '../../screens/LoginScreen';

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			language: "javascript",
			isReady: false,
		}
	}
	_setState = (obj) => {
		this.setState(obj)
	}
	async componentDidMount() {
		await Font.loadAsync({
			CSChatThai: require('../../fonts/CSChatThai.ttf'),
			CSChatThaiUI: require('../../fonts/CSChatThaiUI.ttf'),
		  ...Ionicons.font,
		});
		this.setState({ isReady: true });
	  }
	render() {
		if (!this.state.isReady) {
			return <AppLoading />;
		}
		return (
			<LoginScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default LoginContainer;
