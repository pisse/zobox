import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row,Col,Switch } from 'antd';
import Head from '../component/Head'
import Heading from '../component/Heading';
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'
import QueueAnim from 'rc-queue-anim'

import Config from '../common/config';

var Services = Config.service;

class App extends Base {

    constructor(){
        super();

        var params = util.getUrlParams( );
        this.state = {
            devieceName: params['n'],

            imei: params['imei']
        }

        this.onChange = this.onChange.bind(this);
    }

    init(){
        var that = this;
        var imie = this.state.imei;

        util.request({
            url: Services.deviceinfo,
            type: "get",
            data: {
                imei: imie,
                mobile: "xx",
                skey: "xx"
            },
            success: function(data){
                console.log(data);

                that.closeLoading();

                that.state.devieceName = data['name'];

                that.forceUpdate();

            },
            error: function(data){
                message.error(data.err_msg);
            }
        });
    }

    onChange(){
        console.log(1);
    }
    clickName(){

    }

    render(){

        const {imei,devieceName, ...others } = this.state;

        let m_users_href = './users.html?imei=' + imei + "&d_t=7";

        return (
            <div className="device">
                <Head className="mb5" title={this.state.devieceName}></Head>

                <Heading title="Map" type="single" shape="forward" icon="right" href="./map.html" ></Heading>
                <Heading title="Alarm" type="single" shape="switch" ></Heading>
                <Heading title="GPS" type="single" shape="switch" ></Heading>

                <Heading title="Users" type="multiple" shape="forward" href={m_users_href} ></Heading>
                <Heading title="PIN" type="multiple" shape="forward"  href="./chg_device.html?d_t=6"></Heading>
                <Heading title="Sensitivity" className="mb5" type="multiple" shape="forward"  href="./chg_device.html?d_t=5"></Heading>

                <Heading title="Device IMEI" type="multiple" shape="forward" icon="right" href="./chg_device.html?d_t=4"></Heading>
                <Heading title="SIM IMEI" type="multiple" shape="forward" icon="right" href="./chg_device.html?d_t=3"></Heading>
                <Heading title="SIM Phone#" type="multiple" className="mb5" shape="forward" icon="right" href="./chg_device.html?d_t=2"></Heading>

                <Heading title="Device Name" type="single" shape="forward" icon="right" href="./chg_device.html?d_t=1"></Heading>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react_content'));
