/**
 *	Fix1 container
 */

import React from 'react';
import HomeScreen from '../../screens/HomeScreen';

class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			language: "javascript",
		}
	}
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<HomeScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default HomeContainer;
