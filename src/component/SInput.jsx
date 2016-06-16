'use strict';

import React, { Component } from 'react';
import classNames from 'classnames';

import './base.scss';


class SInput extends Component {

	static defaultProps = {
		prefixCls: 'sinput',
		title:""
	}

	constructor(){
		super();
		this.state = {
			searchCls : "",
			clearCls: "none"
		};

		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleKeyUp(){
		let val = this.refs.input.value;
		if( val!="" ){
			this.state = {
				searchCls : "none",
				clearCls: ""
			}
		} else {
			this.state = {
				searchCls : "",
				clearCls: "none"
			}
		}
		this.forceUpdate();
	}
	handleClick(e){
		e.stopPropagation();
	}


	render(){

		const props = this.props;
		const { className,prefixCls,placeholder, ...others } = props;
		const classes = classNames({
			[prefixCls]: true,
			[className]: className,
		});

		const searchCls = this.state.searchCls;
		const sclasses = classNames({
			[searchCls]: this.state.searchCls,
			'search': true
		});

		const clearCls = this.state.clearCls;
		const cclasses = classNames({
			[clearCls]: this.state.clearCls,
			'clear-text': true
		});

		return (
			<div className={classes}>
				<input placeholder={placeholder}
								  onKeyUp={this.handleKeyUp} ref="input" onClick={this.handleClick} />
				<a href="javascript:;" className={sclasses}></a>
				<a href="javascript:;" className={cclasses}></a>
			</div>
		)
	}
}

export default SInput;

