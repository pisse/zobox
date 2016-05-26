'use strict';

import React, { Component } from 'react';
//import $ from "../bower_components/jquery/dist/jquery";

import './base.scss';


class Logo extends Component {
	displayName =  'Logo';

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
			<div className="logo_bg">
				<a className="logo" href="javascript:;">
					<img src="/res/img/logo1.png" alt=""/>
				</a>
			</div>
		)
	}
}

export default Logo;

