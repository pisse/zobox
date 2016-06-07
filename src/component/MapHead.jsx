'use strict';

import React, { Component } from 'react';
import classNames from 'classnames';
import SInput from './SInput'

import './base.scss';


class MapHead extends Component {

	static defaultProps = {
		prefixCls: 'head',
		title:""
	}

	handleClick(){
		window.history.go(-1);
	}

	render(){

		const props = this.props;
		const { className, prefixCls, placeholder, ...others } = props;
		const classes = classNames({
			[prefixCls]: true,
			[className]: className,
		});


		return (
			<header className={classes} onClick={this.handleClick.bind(this)}>
				<div className="header_goback">
					<span></span>
				</div>
				<SInput placeholder={placeholder}> </SInput>
			</header>
		)
	}
}

export default MapHead;

