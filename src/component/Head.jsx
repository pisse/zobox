'use strict';

import React, { Component } from 'react';
import classNames from 'classnames';

import './base.scss';


class Head extends Component {

	static defaultProps = {
		prefixCls: 'head',
		title:""
	}

	constructor() {
		super();
	}

	handleClick(){
		window.history.go(-1);
	}

	render(){

		const props = this.props;
		const { className,prefixCls,bcls,onAdd, ...others } = props;
		const classes = classNames({
			[prefixCls]: true,
			[className]: className,
		});

		const bclass =  classNames({
			"none": bcls,
			header_goback: true,
		});

		var addIcon;
		if(onAdd){
			addIcon = <i className="add" onClick={onAdd}></i>;
		}

		return (
			<header className={classes}>
				<div className={bclass} onClick={this.handleClick.bind(this)}>
					<span></span>
				</div>
				<h2>
					{this.props.title}
				</h2>
				{addIcon}
			</header>
		)
	}
}

export default Head;

