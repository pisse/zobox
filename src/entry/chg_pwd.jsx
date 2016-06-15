import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row } from 'antd';
import Head from '../component/Head'
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'
import classNames from 'classnames';

import Config from '../common/config';

var Services = Config.service;

class App extends Component {

    constructor(){
        super();

        this.state = {
            btnActive : ""
        };

        this.onkeyup = this.onkeyup.bind(this);
    }

    onkeyup(){
        var pwd = this.refs.pwd.value;
        var n_pwd = this.refs.npwd.value;

        if(  pwd == n_pwd !="" ){
            this.state.btnActive = 'active';
        } else {
            this.state.btnActive = '';
        }
        this.forceUpdate();
    }

    savePwd(){
        var that = this;
        if(this.state.btnActive == "active"){
            var that = this;
            util.request({
                url: Services.chgdevicepasswd,
                type: "get",
                data: {
                    imei: "",
                    mobile: "xx",
                    skey: "xx"
                },
                success: function(data){
                    //that.closeLoading();
                    window.history.go(-1);
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
                <Head title="Change Password"></Head>

                <form className="form no-icon mt5">
                    <label>
                        <input ref="pwd" type="text" id="pwd" placeholder="Old Password" onKeyUp={this.onkeyup} required/>
                    </label>

                    <label>
                        <input ref="npwd" type="password" id="npwd" placeholder="New Password" onKeyUp={this.onkeyup} required/>
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
