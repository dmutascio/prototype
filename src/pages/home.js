import React, { Component } from 'react';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import withStyles from '@material-ui/core/styles/withStyles';
import themePrototype from '../themePrototype';
import '../App.css'
import Icon from '../assets/icon';

import axios from 'axios';

class Home extends Component {
	constructor(props) {
		super(props);
}

render() {
	const { classes } = this.props;
	return (
  	<div className="paper">
			<div className="titleHeader">
				<Icon size = {50}/>
				<p className="font-face-title">Prototype</p>
			</div>
    </div>
	);
}
}

export default Home;
