import util from '../common/lib';
import Base from './_base';
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button, Spin, message } from 'antd';
import Head from '../component/Head'
import classNames from 'classnames';
import Config from '../common/config';

import Validator from "../bower_components/validator-js/validator.min";
var Services = Config.service;


class App extends Base {

    constructor(){
        super();

        this.state = {
            loading : false,
            imeiValue: "",
            simimeiValue: "",
            pinValue:"",

            btnActive: ""
        };

        this.validate = this.validate.bind(this);
        this.addDevice = this.addDevice.bind(this);
        this.simimeiChange = this.simimeiChange.bind(this);
        this.pinChange = this.pinChange.bind(this);
        this.imeiChange = this.imeiChange.bind(this);
    }


    validate(){
        let imei = this.state.imeiValue.replace(/-/g, "");
        let name = this.refs.name.value;
        let sim_imei = this.state.simimeiValue.replace(/-/g, "");
        let pwd = this.state.pinValue;
        let sim_phone = this.refs.sim_phone.value;

        //console.log([imei,name,sim_imei,pwd,sim_phone].join("--"))

        if(imei!= "" && name !="" && sim_imei != "" && sim_phone!="" && pwd!="" && Validator.isLength(imei, 15) && Validator.isLength(sim_imei, 20)  )  {
            this.state.btnActive = "active";
        }else {
            this.state.btnActive = "";
        }
        this.forceUpdate();
    }

    imeiChange(event){
        var value =  event.target.value;

        value = value.replace(/-/g, "").substring(0,15).replace(/(\w{5})(?=[^$])/g, "$1-");

        this.setState({
            imeiValue: value
        });
    }

    pinChange(event){
        var value =  event.target.value;

        value = value.substring(0,6);

        this.setState({
            pinValue: value
        });
    }

    simimeiChange(event){
        var value =  event.target.value;

        value = value.replace(/-/g, "").substring(0,20).replace(/(\w{5})(?=[^$])/g, "$1-");

        this.setState({
            simimeiValue: value
        });
    }

    addDevice(){
        var that = this;
        if(this.state.btnActive == "active"){
            let imei = this.state.imeiValue;
            let pwd = this.state.pinValue || "1234";
            let name = this.refs.name.value;
            let sim_imei = this.state.simimeiValue;
            let sim_phone = this.refs.sim_phone.value;

            this.showLoading();

            util.request({
                url: Services.adddevice,
                type: "get",
                data: {
                    name: name,
                    imei: imei,
                    passwd: pwd,
                    sim_imei: sim_imei,
                    sim_phone: sim_phone
                },
                success: function(data){
                    that.closeLoading();

                    window.location.href = "./main.html";

                },
                error: function(data){
                    that.closeLoading();
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
                <Head title=""></Head>

            <Spin spinning={this.state.loading}>
                <form className="form no-icon mt5">
                    <label>
                        <input type="text" value={this.state.imeiValue} ref="imei" id="imei" placeholder="Device IMEI" onChange={this.imeiChange} onKeyUp={this.validate} required/>
                    </label>

                    <label>
                        <input type="text"  ref="name"  id="Name" placeholder="Device Name" onKeyUp={this.validate}  required/>
                    </label>

                    <label>
                        <input type="password"  value={this.state.pinValue}  ref="pwd" onChange={this.pinChange} id="pwd" placeholder="Device PIN (length less than 6)"  onKeyUp={this.validate} required/>
                    </label>


                    <label>
                        <input type="text" value={this.state.simimeiValue} ref="sim_imei"  id="sim_imei" placeholder="SIM IMEI"  onKeyUp={this.validate} onChange={this.simimeiChange} required/>
                    </label>

                    <label>
                        <input type="text"  ref="sim_country"  id="sim_country" placeholder="SIM Country" onKeyUp={this.validate} required/>
                    </label>

                    <label>
                        <input type="text"  ref="sim_phone"  id="sim_phone" placeholder="SIM Phone" onKeyUp={this.validate} required/>
                    </label>

                </form>
            </Spin>

                <div className="sign_btn mt5">
                        <Button type={btnCls} onClick={this.addDevice}>Add Device</Button>
                </div>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
