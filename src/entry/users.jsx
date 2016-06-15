import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Spin,Modal, Input } from 'antd';
import Head from '../component/Head'
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'

import $ from "../bower_components/jquery/dist/jquery";
import Config from '../common/config';

var Services = Config.service;

class App extends Base {

    constructor(){
        super();

        var params = util.getUrlParams();
        this.state = {
            loading: false,
            imei: params['imei'],
            userlist: []
        };

        this.onChange = this.onChange.bind(this);
        this.showAdd = this.showAdd.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);

    }

    componentDidMount(){

        this.getList();
    }

    getList(){
        var that = this;
        var imei = this.state.imei;

        this.showLoading();

        util.request({
            url: Services.deviceuser,
            type: "get",
            data: {
                imei: imei,
                mobile: "xx",
                skey: "xx"
            },
            success: function(data){
                that.closeLoading();

                $.extend(that.state, data);

                that.forceUpdate();
            },
            error: function(data){
                message.error(data.err_msg);
            }
        });
    }

    onChange(val){
        console.log(val);
    }

    showAdd(){
        this.state.visible = true;
        this.forceUpdate();
    }

    handleCancel(){
        this.state.visible = false;

        this.forceUpdate();
    }

    handleOk(){
        var that = this;
        var imei = this.state.imei;
        var name = this.refs.user.value;

        var user_name = $("#name").val();

        //console.log(user_name);

        this.state.visible = false;
        this.showLoading();

        $("#name").val("");

        util.request({
            url: Services.adddeviceuser,
            type: "get",
            data: {
                imei: imei,
                mobile: "xx",
                skey: "xx"
            },
            success: function(data){
                //that.closeLoading();

                that.getList();

                that.forceUpdate();
            },
            error: function(data){
                message.error(data.err_msg);
            }
        });
    }

    render(){

        var that = this;
        const { userlist, ...others } = this.state;

        console.log(userlist);

        var myList = userlist.map(function(v,idx){

            return (
                <label key={idx}>
                    <input type="text" readOnly id="user1"  value={v} onChange={that.onChange} required/>
                </label>
            )
        });

        return (

            <div className="users">
                <Head className="add" onAdd={this.showAdd} title="Users"></Head>

                <Spin spinning={this.state.loading}>
                    <form className="form no-icon mt5">
                        {myList}
                    </form>
                </Spin>

                <Modal  className="map" title="" visible={this.state.visible} cancelText="Cancel"  okText="OK"  title="对话框标题"
                        onCancel={this.handleCancel} width="80%" onOk={this.handleOk}>
                    <p>
                        <Input id="name" type="text" ref="user" placeholder="User" />
                    </p>

                </Modal>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
