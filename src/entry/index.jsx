import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Alert,Spin, message} from 'antd';
import Head from '../component/Head'
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'
import classNames from 'classnames';
import MD5 from "../bower_components/js-md5/src/md5";
import Validator from "../bower_components/validator-js/validator.min";
import Config from '../common/config';
var Services = Config.service;

import $ from "../bower_components/jquery/dist/jquery";

class App extends Base {

    constructor(){
        super();

        var params = util.getUrlParams();
        this.state = {
            infoCls: "none",
            btnActive: "",
            mobile:params['mobile'],
            loading: false
        };

        this.login = this.login.bind(this);
        //this.register = this.register.bind(this);
        this.keyup = this.keyup.bind(this);

        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
    }

    login(){
        var that = this;
        if(this.state.btnActive == "active"){
            this.showLoading();

            var number = this.refs.mobile.value;
            var pwd = MD5(this.refs.pwd.value);


            util.request({
                url: Services.login,
                type: "get",
                dataType: "json",
                data: {
                    mobile: number,
                    passwd: pwd
                },
                success: function(data){

                    //that.state.infoCls = "";

                    localStorage.setItem("mobile", data['mobile']);
                    localStorage.setItem("skey", data['skey']);

                    that.closeLoading();
                    window.location.href = "./main.html";

                },
                error: function(data){
                    message.error(data.err_msg);
                    that.closeLoading();
                }
            });
        }
    }

    keyup(){
        let number = this.refs.mobile.value;
        let pwd = this.refs.pwd.value;

        if( Validator.isNumeric( number ) && Validator.isLength( number, {min:10,max:11}) && pwd !="" ){
            this.state.btnActive = 'active';
        } else {
            this.state.btnActive = '';
        }
        this.forceUpdate();
    }

    focus(){
        $(".tail").hide();
    }
    blur(){
        $(".tail").show();
    }


    render(){

        /*let is_none = this.state.infoCls;
        let info_cls = classNames({
            wrap_info: true,
            none: is_none
        });
         <Alert message=""
         description="No worries.We will send you a Email to your registered account.Please sign on with your temporary password. Once
         you  signed on,please update your password"
         type="info" />
        */

        let btnCls =  classNames({
            "primary": true,
            "active": this.state.btnActive,
        });

        let mobile = this.state.mobile;

        return (

            <div className="sign_on ">
                <Head title="Login" bcls="none"></Head>
                <Logo></Logo>
                <Spin spinning={this.state.loading}  >
                    <form className="form">
                        <label className="mobile" htmlFor="mobile">
                            <input type="text" ref="mobile" id="email" defaultValue={mobile} placeholder="Mobile" onKeyUp={this.keyup} onFocus={this.focus} onBlur={this.blur} required/>
                        </label>

                        <label className="pwd" htmlFor="pwd">
                            <input type="password"  ref="pwd" id="pwd" placeholder="Password" onKeyUp={this.keyup} onFocus={this.focus} onBlur={this.blur} required/>
                        </label>
                    </form>
                </Spin>

                <div className="sign_btn">
                    <p className="reg_btn mb10">
                        <a href="./forget_pwd.html" className="forget" >Forget Password</a>
                        <a href="./register.html" className="register" >Register</a>
                    </p>

                    <div className="wrap_info">
                        <Button type={btnCls} onClick={this.login}>Sign In</Button>
                    </div>

                </div>

                <PageTail />
            </div>

        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
