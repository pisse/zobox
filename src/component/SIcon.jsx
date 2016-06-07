'use strict';

import React, { Component } from 'react';
//import $ from "../bower_components/jquery/dist/jquery";

import classNames from 'classnames';
import './base.scss';


class SIcon extends Component {
	displayName =  'SIcon';

	constructor() {
		super();
	}

	static defaultProps = {
		prefixCls: 'sicon'
	}


	render(){

		const props = this.props;
		const { className,prefixCls,type,status, ...others } = props;
		const classes = classNames({
			[prefixCls]: true,
			[`${prefixCls}-${type}`]: type,
			[`${prefixCls}-${type}-${status}`]: status,
			[className]: className
		});

		return (
			 <i className={classes}/>
		)
	}
}

export default SIcon;

