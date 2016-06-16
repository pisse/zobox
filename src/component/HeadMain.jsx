import util from '../common/lib';
import React, { Component } from 'react';
import { Checkbox,Button,Row,Col } from 'antd';
//import $ from "../bower_components/jquery/dist/jquery";
//import Config from '../common/config';

//var Services = Config.service;

import './base.scss';


class HeadMain extends Component {
	displayName =  'HeadMain';

	constructor() {
		super();

	}

	render(){

		return (
			<header className="head">
				<h2>
					<a className="setting" href="./setting.html"><span>Setup</span></a>
					<a className="add-device" href="./add_user.html"><span>Add</span></a>
				</h2>
			</header>
		)
	}
}

export default HeadMain;

