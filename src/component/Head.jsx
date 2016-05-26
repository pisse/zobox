'use strict';

import React, { Component } from 'react';
//import $ from "../bower_components/jquery/dist/jquery";

import './base.scss';


class Head extends Component {
	displayName =  'Head';

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
			<header className="head">
				<h2>{this.state.title}</h2>
			</header>
		)
	}
}

export default Head;

