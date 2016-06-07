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


		let icon = this.props.type =="black" ?  "/res/img/blogo.png" : "/res/img/logo1.png";
		let version = this.props.version;
		let ver_cls = version!="" ? "version": "none";

		return (
			<div className="logo_bg">
				<a className="logo" href="javascript:;">
					<img src={icon} alt=""/>
				</a>
				<p className={ver_cls}>{version}</p>
			</div>
		)
	}
}

export default Logo;

