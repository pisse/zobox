import util from '../common/lib';
import Base from './_base';
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row,Spin,Cascader,message } from 'antd';
import Head from '../component/Head'
import Logo from '../component/Logo'
import classNames from 'classnames';
import MD5 from "../bower_components/js-md5/src/md5";

import Config from '../common/config';

import Validator from "../bower_components/validator-js/validator.min";


var Services = Config.service;

class App extends Base {

    constructor(){
        super();

        this.state = {
            loading: false,
            vcodeActive: "",
            btnActive: "",

            country: "1",
            count: 0,

            options: [{
                value: '1',
                label: 'American'
            },{
                value: '2',
                label: 'Britain'
            },{
                value: '3',
                label: 'China'
            }]
        };

        this.register = this.register.bind(this);
        this.mobileKeyup = this.mobileKeyup.bind(this);
        this.codeKeyup = this.codeKeyup.bind(this);
        this.getVcode = this.getVcode.bind(this);
        this.onChange = this.onChange.bind(this);
        this.startTick = this.startTick.bind(this);
    }

    onChange(value){
        this.state.country = value[0];
    }

    register(){
        var that = this;
        let valid = this.codeKeyup();
        if(valid){
            this.showLoading();

            let pwd = MD5( this.refs.pwd.value );
            //let pwd_confirm = this.refs.confirmPwd.value;
            let vcode = this.refs.vcode.value;
            let phoneNum = this.refs.mobile.value;
            let country = this.state.country;

            util.request({
                url: Services.register,
                type: "get",
                data: {
                    mobile: phoneNum,
                    passwd: pwd,
                    country: country,
                    vcode: vcode
                },
                success: function(data){

                    that.closeLoading();

                    window.location.href = "./index.html?mobile=" + phoneNum;
                },
                error: function(data){

                    that.closeLoading();

                    message.error( data.err_msg );
                }
            });
        }
    }

    mobileKeyup(){
        let ret = false;
        let number = this.refs.mobile.value;
        if( Validator.isNumeric(number) && Validator.isLength(number, {min:10,max:11})){
            this.state.vcodeActive = 'active';
            ret = true;
        } else {
            this.state.vcodeActive = '';
        }
        this.forceUpdate();
        return ret;
    }

    codeKeyup(){
        let ret = false;
        let pwd = this.refs.pwd.value;
        let pwd_confirm = this.refs.confirmPwd.value;
        let vcode = this.refs.vcode.value;

        if( pwd == pwd_confirm && vcode!=""){
            this.state.btnActive = 'active';
            ret = true;
        } else {
            this.state.btnActive = '';
        }

        this.forceUpdate();
        return ret;
    }

    startTick(){
        var that = this;
        if( this.state.count > 0){
            this.state.count = this.state.count -1;

            this.forceUpdate();

            setTimeout( function(){
                that.startTick();
            }, 1000 );
        } else {
            this.state.waiting = false;
            this.mobileKeyup();
        }
    }

    getVcode(){
        var that = this;
        if(this.state.vcodeActive =="active"){

            let number = this.refs.mobile.value;
            let country = this.state.country;

            util.request({
                url: Services.getvcode,
                type: "get",
                data: {
                    mobile: number,
                    country: country
                },
                success: function(data){
                },
                error: function(data){
                    message.error(data.retmsg);
                }
            });

            this.state.vcodeActive = "";
            this.state.waiting = true;
            this.state.count = 60;



            this.startTick();

            this.forceUpdate();
        }

    }

    render(){

        let vcodeCls =  classNames({
            "vcode-btn": true,
            "active": this.state.vcodeActive,
        });
        let btnCls =  classNames({
            "primary": true,
            "active": this.state.btnActive,
        });

        let code_title = this.state.waiting ? this.state.count: "get code";

        return (

            <div className="register ">
                <Head title=""></Head>
                <Logo></Logo>

                <Spin spinning={this.state.loading}  >
                    <form className="form">

                        <label className="mobile" htmlFor="mobile">
                            <input type="text" ref="mobile" id="mobile" placeholder="Mobile" onKeyUp={this.mobileKeyup} required/>
                        </label>

                        <label className="country" htmlFor="country">
                            <span className="coutry-wrap">
                                 <Cascader options={this.state.options} onChange={this.onChange} defaultValue={["1"]} placeholder="Country"></Cascader>
                            </span>
                        </label>

                        <label className="pwd" htmlFor="pwd">
                            <input type="password" ref="pwd" id="pwd" placeholder="Password"  required/>
                        </label>

                        <label className="confirm_pwd" htmlFor="confirm_pwd">
                            <input type="password" ref="confirmPwd" id="confirm_pwd" placeholder="Confirm Password"  required/>
                        </label>

                        <label className="vcode" htmlFor="vcode">
                            <input type="text" ref="vcode" id="vcode" placeholder="Verification Code" onKeyUp={this.codeKeyup} required/>
                            <i className={vcodeCls} onClick={this.getVcode}>{code_title}</i>
                        </label>

                    </form>
                </Spin>
                <div className="sign_btn mt5">
                        <Button type={btnCls} onClick={this.register.bind(this)}>Register</Button>
                </div>
            </div>

        )
    }
}


ReactDOM.render( <App />, document.getElementById('react_content') );
