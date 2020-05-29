
import React from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import * as GoogleSignIn from 'expo-google-sign-in';
import * as AppAuth from 'expo-app-auth';


import LoginScreen from '../../screens/LoginScreen'

class LoginContainer extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	language: "script",
        	loadingFont: true,
		  	user: null
        }
        this._loadingFont = this._loadingFont.bind(this);
  	}
	componentDidMount() {
		this._loadingFont()
		this.initAsync();
	}

	async _loadingFont () {
		await Font.loadAsync({
			CSChatThai: require("../../fonts/CSChatThai.ttf"),
	        CSChatThaiUI: require("../../fonts/CSChatThaiUI.ttf")
		})

		this.setState({ loadingFont: false })
	}
	
	initAsync = async () => {
		await GoogleSignIn.initAsync({
		  // You may ommit the clientId when the firebase `googleServicesFile` is configured
		  clientId: 'com.googleusercontent.apps.603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9',
		  
		});
		this._syncUserWithStateAsync();
	};
	
	  _syncUserWithStateAsync = async () => {
		const user = await GoogleSignIn.signInSilentlyAsync();
		this.setState({ user });
	  };
	
	  signOutAsync = async () => {
		await GoogleSignIn.signOutAsync();
		this.setState({ user: null });
	  };
	
	  signInAsync = async () => {
		try {
		  await GoogleSignIn.askForPlayServicesAsync();
		  const { type, user } = await GoogleSignIn.signInAsync();
		  if (type === 'success') {
			this._syncUserWithStateAsync();
		  }
		} catch ({ message }) {
		  alert('login: Error:' + message);
		}
	  };
	
	  onPress = () => {
		if (this.state.user) {
		  this.signOutAsync();
		} else {
		  this.signInAsync();
		}
	  };
	
      _setState = () => {
        this.setState({});
      };

      
      render() {
        const { loadingFont } = this.state

		if (loadingFont) {
		return <AppLoading />
		}
		return (
			<LoginScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
				onPressGG={this.onPress}
				
			/>
		);
	}
}

export default LoginContainer;