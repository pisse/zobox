'use strict';

import React, { Component } from 'react';
import { Switch } from 'antd';

import classNames from 'classnames';


import './base.scss';

export default class Heading extends Component {

	static defaultProps = {
		prefixCls: 'heading'
	}

	constructor() {
		super();

	}

	onchange = (checked) =>{
		console.log(checked);
	}

	handleClick(){
		if(this.props.href){
			window.location.href = this.props.href;
		}

		if(this.props.click){
			this.props.click.call(this);
		}
	}

	render(){

		const props = this.props;
		const { type, shape,title, className, prefixCls, href,...others } = props;

		const classes = classNames({
			[prefixCls]: true,
			[`${prefixCls}-${type}`]: type,
			[`${prefixCls}-${shape}`]: shape=="forward",
			[className]: className
		});

		return (
			<p className={classes} onClick={this.handleClick.bind(this)}>
				{title}
				{shape=="switch" ? <Switch defaultChecked={false} onChange={this.onChange} />: null}
			</p>
		)
	}
}
