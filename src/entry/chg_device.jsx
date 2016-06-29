import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row,Spin, message } from 'antd';
import Head from '../component/Head'
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'
import classNames from 'classnames';
import $ from "../bower_components/jquery/dist/jquery";

import Config from '../common/config';

var Services = Config.service;

class App extends Base {

    constructor(){
        super();

        var params = util.getUrlParams();
        this.state = {
            btnActive: "",
            loading: false,
            d_t: params['d_t'],
            imei: params['imei']
        };

        this.keyup = this.keyup.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.init();
    }

    init(){
        var that = this;
        var imie = this.state.imei;

        this.showLoading();

        util.request({
            url: Services.deviceinfo,
            type: "get",
            data: {
                imei: imie
            },
            success: function(data){

                    that.closeLoading();

                    $.extend(that.state, data);

                    that.forceUpdate();
            },
            error: function(data){
                that.closeLoading();
                message.error(data.err_msg);
            }
        });
    }

    getByType(type){
        var key = "";
        type = parseInt(type);

        switch (type){
            case 1:
                key = 'name';break;
            case 2:
                key = 'sim_phone';break;
            case 3:
                key = 'sim_imei';break;
            case 4:
                key = 'imei';break;
            case 5:
                key = 'sensitivity';break;
            case 6:
                key = 'pin';break;

            default:
                key = ""; break;
        }

        return key;
    }

    handleClick(){
        var that = this;

        if(this.state.btnActive == "active"){

            this.showLoading();

            //var data = $.extend({}, this.state);
            const { name,sim_phone,sim_imei,imei,sensitivity,alarm,gps, ...others } = this.state;

            var data = {
                name: name,
                sim_phone: sim_phone,
                sim_imei: sim_imei,
                imei: imei,
                sensitivity: sensitivity,
                alarm: alarm,
                gps: gps
            };

            var type = this.state.d_t;
            var key = this.getByType( type );

            var new_value = this.refs.ipt.value;
            data[key] = new_value;

            util.request({
                url: Services.moddevice,
                type: "get",
                data: data,
                success: function(data){

                        that.closeLoading();

                        window.history.go(-1);
                },
                error: function(data){
                    that.closeLoading();

                    message.error(data.err_msg);
                }
            });
        }
    }

    keyup(){
        let new_val = this.refs.ipt.value;

        if(  new_val !="" ){
            this.state.btnActive = 'active';
        } else {
            this.state.btnActive = '';
        }
        this.forceUpdate();
    }

    render(){

        const { d_t, first_name,last_name,country,state,city, street, zipcode, ...others } = this.state;

        let btnCls =  classNames({
            "primary": true,
            "active": this.state.btnActive
        });

        var key = this.getByType( d_t );
        var old_val = this.state[key];


        var inp_str;
        if( old_val!= undefined || old_val){
            inp_str = <input type="text" ref='ipt' id="name" defaultValue={old_val} onKeyUp={this.keyup} required/>
        }

        return (
            <div className="register">
                <Head title=""></Head>

                <Spin spinning={this.state.loading}  >
                    <form className="form no-icon mt5">
                        <label >
                            {inp_str}
                        </label>
                    </form>
                </Spin>

                <div className="sign_btn mt5">
                    <Button type={btnCls} onClick={this.handleClick}>Confirm</Button>
                </div>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
