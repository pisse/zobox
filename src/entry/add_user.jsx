import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button, Spin } from 'antd';
import Head from '../component/Head'
import Logo from '../component/Logo'
import PageTail from '../component/PageTail';
import classNames from 'classnames';
import Config from '../common/config';

import Validator from "../bower_components/validator-js/validator.min";
var Services = Config.service;


class App extends Base {

    constructor(){
        super();

        this.state = {
            loading : false,

            btnActive: ""
        };

        this.validate = this.validate.bind(this);
        this.addDevice = this.addDevice.bind(this);
    }

    validate(){
        let imei = this.refs.imei.value;
        let sim_imei = this.refs.sim_imei.value;
        let sim_phone = this.refs.sim_phone.value;

        if(imei!= "" && sim_imei != "" && sim_phone!="")  {
            this.state.btnActive = "active";
        }else {
            this.state.btnActive = "";
        }
        this.forceUpdate();
    }

    addDevice(){
        var that = this;
        if(this.state.btnActive == "active"){
            let imei = this.refs.imei.value;
            let pwd = this.refs.pwd.value;
            let sim_imei = this.refs.sim_imei.value;
            let sim_phone = this.refs.sim_phone.value;

            this.showLoading();

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

                    window.location.href = "./main.html";

                },
                error: function(data){
                    message.error(data.err_msg);
                }
            });
        }
    }

    render(){

        let btnCls =  classNames({
            "primary": true,
            "active": this.state.btnActive,
        });

        return (
            <div className="register">
                <Head title="Add Device"></Head>

            <Spin spinning={this.state.loading}>
                <form className="form no-icon mt5">
                    <label>
                        <input type="text" ref="imei" id="imei" placeholder="IMEI" onKeyUp={this.validate} required/>
                    </label>

                    <label>
                        <input type="password"  ref="pwd"  id="pwd" placeholder="Password"  required/>
                    </label>


                    <label>
                        <input type="text"  ref="sim_imei"  id="sim_imei" placeholder="SIM_IMEI" onKeyUp={this.validate} required/>
                    </label>


                    <label>
                        <input type="text"  ref="sim_phone"  id="sim_phone" placeholder="SIM_PHONE" onKeyUp={this.validate} required/>
                    </label>

                </form>
            </Spin>

                <div className="sign_btn">
                        <Button type={btnCls} onClick={this.addDevice}>Confirm</Button>
                </div>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
