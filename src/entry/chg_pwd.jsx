import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row,message } from 'antd';
import Head from '../component/Head'
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'
import classNames from 'classnames';
import $ from "../bower_components/jquery/dist/jquery";
import MD5 from "../bower_components/js-md5/src/md5";

import Config from '../common/config';

var Services = Config.service;

class App extends Base {

    constructor(){
        super();

        this.state = {
            loading: false,
            btnActive : "",
            vcodeActive: "active",

            count: 0,
        };

        this.onkeyup = this.onkeyup.bind(this);
        this.codeKeyup = this.codeKeyup.bind(this);
        this.getVcode = this.getVcode.bind(this);
    }

    componentDidMount(){
        this.init();
    }

    init(){
        var that = this;

        this.showLoading();

        util.request({
            url: Services.profile,
            type: "get",
            data: {},
            success: function(data){

                that.closeLoading();

                $.extend(that.state, data);

                //that.forceUpdate();
            },
            error: function(data){
                message.error(data.err_msg);
            }
        });
    }

    onkeyup(){
        var pwd = this.refs.pwd.value;
        var n_pwd = this.refs.npwd.value;
        var vcode = this.refs.vcode.value;

        if(  pwd == n_pwd && pwd !="" && vcode!="" ){
            this.state.btnActive = 'active';
        } else {
            this.state.btnActive = '';
        }
        this.forceUpdate();
    }

    codeKeyup(){
        let ret = false;
        let pwd = this.refs.pwd.value;
        let n_pwd = this.refs.npwd.value;
        let vcode = this.refs.vcode.value;

        if(  pwd == n_pwd && pwd !="" && vcode!="" ){
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
            this.onkeyup();
        }
    }

    getVcode(){
        var that = this;
        if(this.state.vcodeActive =="active"){

            var country = that.state.country;
            util.request({
                url: Services.getvcode,
                type: "get",
                data: {
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

    savePwd(){
        var that = this;

        if(this.state.btnActive == "active"){

            this.showLoading();

            let vcode = this.refs.vcode.value;
            let pwd = MD5( this.refs.pwd.value);

            util.request({
                url: Services.chgpasswd,
                type: "get",
                data: {
                    vcode: vcode,
                    passwd: pwd
                },
                success: function(data){
                    that.closeLoading();
                    window.history.go(-1);
                },
                error: function(data){
                    that.closeLoading();

                    message.error(data.err_msg, 3);
                }
            });
        }

    }

    render(){

        let btnCls =  classNames({
            "primary": true,
            "active": this.state.btnActive,
        });

        let vcodeCls =  classNames({
            "vcode-btn": true,
            "active": this.state.vcodeActive,
        });

        let code_title = this.state.waiting ? this.state.count: "get code";

        return (
            <div className="register">
                <Head title="Change Password"></Head>

                <form className="form no-icon mt5">
                    <label>
                        <input ref="pwd" type="text" id="pwd" placeholder="Old Password" onKeyUp={this.onkeyup} required/>
                    </label>

                    <label>
                        <input ref="npwd" type="password" id="npwd" placeholder="New Password" onKeyUp={this.onkeyup} required/>
                    </label>

                    <label>
                        <input type="text" ref="vcode" id="vcode" placeholder="Verification Code" onKeyUp={this.codeKeyup} required/>
                        <i className={vcodeCls} onClick={this.getVcode}>{code_title}</i>
                    </label>
                </form>

                <div className="sign_btn">
                        <Button type={btnCls} onClick={this.savePwd.bind(this)}>Confirm</Button>
                </div>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
