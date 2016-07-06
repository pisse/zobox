import util from '../common/lib';
import Base from './_base';
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button, Spin, message, Cascader,Select } from 'antd';
import Head from '../component/Head'
import classNames from 'classnames';
import Config from '../common/config';

import countries  from '../component/country';

import Validator from "../bower_components/validator-js/validator.min";
var Services = Config.service;

const Option = Select.Option;

class App extends Base {

    constructor(){
        super();

        this.state = {
            loading : false,
            imeiValue: "",
            simimeiValue: "",
            pinValue:"",

           /* options: [{
                value: '1',
                label: 'American'
            },{
                value: '2',
                label: 'Britain'
            },{
                value: '3',
                label: 'China'
            }],*/

            isIphone: navigator.platform == "iPhone" ,
            dftCountryValue: "1",
            dftCountryName: "United States",

            btnActive: ""
        };

        this.validate = this.validate.bind(this);
        this.addDevice = this.addDevice.bind(this);
        this.simimeiChange = this.simimeiChange.bind(this);
        this.pinChange = this.pinChange.bind(this);
        this.imeiChange = this.imeiChange.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
        this.onIosCountryChange = this.onIosCountryChange.bind(this);
    }

    onCountryChange(value){
        this.state.country = value.split("|")[1];
        console.log(this.state.country)
    }
    onIosCountryChange(event){
        this.state.country = $("select").val();
    }

    validate(){
        let imei = this.state.imeiValue.replace(/-/g, "");
        let name = this.refs.name.value;
       // let sim_imei = this.state.simimeiValue.replace(/-/g, "");
        let pwd = this.state.pinValue;
        let sim_phone = this.refs.sim_phone.value;

        //console.log([imei,name,sim_imei,pwd,sim_phone].join("--"))

        if(imei!= "" && name !=""  && sim_phone!="" && Validator.isLength(imei, 15)  )  {
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
            let imei = this.state.imeiValue.replace(/-/g, "");
            let pwd = this.state.pinValue || "1234";
            let name = this.refs.name.value;
            //let sim_imei = this.state.simimeiValue.replace(/-/g, "");
            let sim_phone = this.refs.sim_phone.value;
            let sim_country = this.state.country;

            this.showLoading();

            util.request({
                url: Services.adddevice,
                type: "get",
                data: {
                    name: name,
                    imei: imei,
                    passwd: pwd,
                //    sim_imei: sim_imei,
                    sim_phone: sim_phone,
                    sim_country: sim_country
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

        var that = this;
        let btnCls =  classNames({
            "primary": true,
            "active": this.state.btnActive,
        });

        /*<label>
            <input type="text" value={this.state.simimeiValue} ref="sim_imei"  id="sim_imei" placeholder="SIM IMEI"  onKeyUp={this.validate} onChange={this.simimeiChange} required/>
        </label>*/

       /* <label className="country pl5">
                            <span className="coutry-wrap">
                                 <Cascader options={this.state.options} allowClear={false} onChange={this.onCountryChange} defaultValue={["1"]} placeholder="Country"></Cascader>
                            </span>
        </label>*/

        var select;
        var options = countries.map(function(v,i){
            if( that.state.isIphone ){
                return <Option key={v['name']+ "|" +v['value']} > {v['name']} </Option>;
            } else{
                return <option key={i}  value={v['value']}> {v['name']} </option >;
            }
        });


        if( this.state.isIphone){
            select = (
                <Select showSearch optionFilterProp="children" defaultValue={this.state.dftCountryName} onChange={this.onCountryChange}>
                    {options}
                </Select>
            )
        } else {
            select = (
                <select name="country" defaultValue={this.state.dftCountryValue} onChange={this.onIosCountryChange}>
                    {options}
                </select >
            )
        }



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

                    <label className="pl8 pr8">
                        {select}
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
