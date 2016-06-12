import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Alert,Spin} from 'antd';
import Head from '../component/Head'
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'
import reqwest from 'reqwest';
import classNames from 'classnames';
import MD5 from "../bower_components/js-md5/src/md5";
import Validator from "../bower_components/validator-js/validator.min";
import Config from '../common/config';
var Services = Config.service;

class App extends Base {

    constructor(){
        super();

        this.state = {
            infoCls: "none",
            btnActive: "",
            loading: false
        };

        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.keyup = this.keyup.bind(this);
    }

    onChange(){

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
                data: {
                    mobile: number,
                    passwd: pwd
                },
                success: function(data){

                    that.state.infoCls = "";

                    setTimeout(function(){
                        that.closeLoading();
                        window.location.href = "./main.html";
                    }, 3000);

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

    register(){

    }

    render(){

        let is_none = this.state.infoCls;
        let info_cls = classNames({
            wrap_info: true,
            none: is_none,
        });

        let btnCls =  classNames({
            "primary": true,
            "active": this.state.btnActive,
        });

        return (
            <Spin spinning={this.state.loading}  >
            <div className="sign_on ">
                <Head title="Sign on" bcls="none"></Head>
                <Logo></Logo>

                <form className="form">
                    <label className="mobile" htmlFor="mobile">
                        <input type="text" ref="mobile" id="email" placeholder="Mobile" onKeyUp={this.keyup} required/>
                    </label>

                    <label className="pwd" htmlFor="pwd">
                        <input type="password"  ref="pwd" id="pwd" placeholder="Password" onKeyUp={this.keyup} required/>
                    </label>
                </form>


                <div className="sign_btn">

                    <div className={info_cls}>
                        <Alert message=""
                               description="No worries.We will send you a Email to your registered account.Please sign on with your temporary password. Once
                           you  signed on,please update your password"
                               type="info" />
                        <Button type={btnCls} onClick={this.login}>Sign In</Button>
                    </div>

                        <Checkbox defaultChecked={false} onChange={this.onChange}>Forget Password</Checkbox>
                    <br/>
                    <p className="reg_btn">
                        <Button type="primary">Register</Button>
                    </p>

                </div>

                <PageTail/>
            </div>
            </Spin>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
