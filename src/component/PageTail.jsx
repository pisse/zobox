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

			</div>
		)
	}
}

export default PageTail;

