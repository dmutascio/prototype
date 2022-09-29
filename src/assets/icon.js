import React, { Component } from 'react';
import themePrototype from '../themePrototype'

import icon from './icon.png';

import axios from 'axios';

class Icon extends Component {
	constructor(props) {
		super(props);
		this.props = props;
}

render(props) {
	const iconStyle = {
		width: this.props.size-5,
		height: this.props.size
	}

	return (
    <img style={iconStyle} src={icon} alt="Prototype"/>
  )
}
}

export default Icon;
