'use strict';

import React, { Component } from 'react';
//import $ from "../bower_components/jquery/dist/jquery";

import './base.scss';


class PageTail extends Component {
	displayName =  'PageTail';

	constructor() {
		super();

		this.state = {
			title: ""
		}
	}

	componentWillMount(){
		var title = this.props.title;

		this.setState({
			title: title
		});
	}

	render(){
		return (
			<div className="tail">
				<p>Copyright by Gyro Alarm Inc.</p>
				<p>Call 1-800-GyroCall or email support@GyroCall.</p>
				<p>com for customer service.</p>
			</div>
		)
	}
}

export default PageTail;

