'use strict';

import React, { Component } from 'react';
import { Checkbox,Button,Row,Col } from 'antd';
//import $ from "../bower_components/jquery/dist/jquery";

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
					<a className="setting" href="./setting.html">Setup</a>
					<a className="add-device" href="">Add Device</a>
				</h2>
			</header>
		)
	}
}

export default HeadMain;

