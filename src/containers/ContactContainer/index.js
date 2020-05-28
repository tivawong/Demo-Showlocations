
import React from 'react';
import ContactScreen from '../../screens/ContactScreen';

class ContactContainer extends React.Component {
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
			<ContactScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default ContactContainer;
