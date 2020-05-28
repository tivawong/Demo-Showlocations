
import React from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

import LoginScreen from '../../screens/LoginScreen'

class LoginContainer extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          language: "script",
          loadingFont: true,

        }
        this._loadingFont = this._loadingFont.bind(this);
  	}
  
	componentDidMount () {
		this._loadingFont()
	}

	async _loadingFont () {
		await Font.loadAsync({
			CSChatThai: require("../../fonts/CSChatThai.ttf"),
	        CSChatThaiUI: require("../../fonts/CSChatThaiUI.ttf")
		})

		this.setState({ loadingFont: false })
	}
   
    
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
			/>
		);
	}
}

export default LoginContainer;