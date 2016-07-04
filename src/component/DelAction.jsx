'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import $ from "../bower_components/jquery/dist/jquery";
import classNames from 'classnames';

import './base.scss';


class DelAction extends Component {

	constructor() {
		super();

		this.state = {
			maskShow: false,
			slideOut: false
		};

		this.onCancel = this.onCancel.bind(this);
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
	}

	static defaultProps = {
		prefixCls: 'delete_wrap',
		maskCls: "del-mask"
	}

	componentWillMount(){
		var title = this.props.title;

		this.setState({
			title: title
		});
	}

	show(){
		$(document.body).css('overflow', 'hidden');
		this.state.maskShow = true;
		this.state.slideOut = false;
		this.forceUpdate();
	}

	hide(){
		var that = this;
		this.state.slideOut = true;
		this.forceUpdate();

		setTimeout(function(){

			$(document.body).css('overflow', 'auto');
			that.state.maskShow = false;
			that.forceUpdate();

		}, 500);
	}

	onCancel(){
		this.hide();
	}

	render(){

		const props = this.props;
		const { title,cancelTitle, onDelete, msg,prefixCls,className,hide, ...others } = props;

		const classes = classNames({
			[prefixCls]: true,
			[className]: className,
			"slide_out": this.state.slideOut
		});

		const maskCls =  classNames({
			"ant-modal-mask": true,
			"hide": !this.state.maskShow
		});


		return (
			<div className={!this.state.maskShow? "hide": ""}>
				<div className={maskCls}></div>
				<div className={classes}>
					<a className="del" href="javascript:;" onClick={onDelete}>{title ? title: "Delete this device"}</a>
					<a className="cancel" href="javascript:;" onClick={this.onCancel}> {cancelTitle?cancelTitle: "Cancel"}</a>
				</div>
			</div>
		)
	}
}

var deleteInstance = void 0;
function getDeleteInstance(props) {
	if( deleteInstance ){
		return deleteInstance;
	}

	var div = document.createElement('div');
	document.body.appendChild(div);

	deleteInstance = ReactDOM.render(React.createElement(DelAction, props), div);


	return deleteInstance;
}


exports["default"] = {
	show: function(props){

		var instance = getDeleteInstance(props);
		instance.show();
	},

	close: function(){
		var instance = getDeleteInstance();
		instance.hide();
	}
}

module.exports = exports['default'];


