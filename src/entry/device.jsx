import util from '../common/lib';
import Base from './_base';
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Switch } from 'antd';
import Head from '../component/Head'
import Heading from '../component/Heading';
import $ from "../bower_components/jquery/dist/jquery";

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
    }

    componentDidMount(){
        this.init();
    }


    init(){
        var that = this;
        var imie = this.state.imei;

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
                message.error(data.err_msg);
            }
        });
    }

    render(){

        const {imei,name, sim_imei,sim_phone, ...others } = this.state;

        let m_users_href = './users.html?imei=' + imei + "&d_t=7";

        let map_href =  './map.html?imei=' + imei;

        let name_url = './chg_device.html?d_t=1' + '&imei=' + imei;
        let sim_phone_url = './chg_device.html?d_t=2' + '&imei=' + imei;
        let sim_imei_url = './chg_device.html?d_t=3' + '&imei=' + imei;
        let imei_url = './chg_device.html?d_t=4' + '&imei=' + imei;
        let sen_url = "./chg_device.html?d_t=5" + '&imei=' + imei;
        let pin_url = "./chg_device.html?d_t=6" + '&imei=' + imei;

        return (
            <div className="device">
                <Head className="mb5" title={this.state.devieceName}></Head>

                <Heading title="Map" type="single" shape="forward" icon="right" href={map_href}></Heading>
                <Heading title="Alarm" type="single" shape="switch" ></Heading>
                <Heading title="GPS" type="single" shape="switch" ></Heading>

                <Heading title="Users" type="multiple" shape="forward" href={m_users_href} ></Heading>
                <Heading title="Sensitivity" className="mb5" type="multiple" shape="forward"  href={sen_url}></Heading>

                <Heading title="IMEI" val={imei} type="multiple" shape="forward" icon="right" href={imei_url}></Heading>
                <Heading title="Name" val={name} type="multiple" shape="forward" icon="right" href={name_url}></Heading>
                <Heading title="Password"  className="mb5" type="multiple" shape="forward"  href={pin_url}></Heading>

                <Heading title="SIM IMEI" val={sim_imei} type="multiple" shape="forward" icon="right" href={sim_imei_url}></Heading>
                <Heading title="SIM Phone" val={sim_phone} type="multiple" className="mb5" shape="forward" icon="right" href={sim_phone_url}></Heading>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react_content'));
