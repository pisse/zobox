import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,message, Row,Col,Switch,Spin,Icon,Modal } from 'antd';
import HeadMain from '../component/HeadMain';
import SIcon from '../component/SIcon';
import $ from "../bower_components/jquery/dist/jquery";

import "../bower_components/zeptojs/src/event"
import "../bower_components/zeptojs/src/touch";

import Config from '../common/config';

var Services = Config.service;

class App extends Base {

    constructor(){
        super();

        this.state = {
            loading: false,
            deviceList: [],
            myDeviceNum: 0,
            otherDeviceNum: 0,
            otherDeviceList: [],
            visible: false
        };

        //this.addDevice = this.addDevice.bind(this);
        //this.handleCancel = this.handleCancel.bind(this);
        //this.handleOk = this.handleOk.bind(this);
    }

    componentDidMount(){
        var that = this;
        this.getList();

        Zepto(document).on("swipeLeft", ".list-item", function(e){
            $(this).addClass('translation');
        });

        Zepto(document).on("swipeRight", ".list-item", function(e){
            $(this).removeClass('translation');
        });

        Zepto(document).on("click", ".list-item", function(e){
            $(this).removeClass('translation');
        });

        Zepto(document).on('click', '.delete', function(e){
            const confirm = Modal.confirm;
            var imei = $(this).attr('data-imei');

            that.deleteDevice(imei);
            //console.log(imei);
            /*confirm({
                title: 'Are?',
                content: 'Delete device!',
                onOk() {
                    that.deleteDevice(imei);
                },
                onCancel() {}
            });*/
        });

    }

    deleteDevice(imei){
        var that = this;

        //var imei = this.state.imei;

        util.request({
            url: Services.deldevice,
            type: "get",
            data: {
                imei: imei
            },
            success: function(data){
                that.getList();
            },
            error: function(data){
                message.error(data.err_msg);
            }
        });
    }

    getList(){
        var that = this;
        that.showLoading();
        util.request({
            url: Services.devicelist,
            type: "get",
            data: {},
            success: function(data){

                that.closeLoading();
                that.state.deviceList = data['my_device'] || [];
                that.state.otherDeviceList = data['other_device'] || [];

                that.state.myDeviceNum = data['my_device_num'];
                that.state.otherDeviceNum = data['other_device_num'];

                that.forceUpdate();

            },
            error: function(data){
                that.closeLoading();
                message.error(data.err_msg);
            }
        });
    }

/*    addDevice(){
        this.state.visible = true;
        this.forceUpdate();
    }

    handleCancel(){
        this.state.visible = false;

        this.forceUpdate();
    }

    handleOk(){
        var that = this;
        var imei = this.state.imei;

        var device_name = $("#device").val();

        //console.log(user_name);

        this.state.visible = false;
        this.showLoading();

        $("#device").val("");

        util.request({
            url: Services.adddeviceuser,
            type: "get",
            data: {
                imei: imei,
                mobile: "xx",
                skey: "xx"
            },
            success: function(data){
                //that.closeLoading();

                that.getList();

                that.forceUpdate();
            },
            error: function(data){
                message.error(data.err_msg);
            }
        });
    }*/

    render(){

        const { deviceList,otherDeviceList,myDeviceNum,otherDeviceNum, ...others } = this.state;

        var myList = deviceList.map(function(v,idx){
            let info_href = './device.html?imei=' + v['imei'] + '&n=' + v['name'];
            let alarm_href = './alarm.html?imei=' + v['imei'];

            return (
                <li className="list-item" key={idx} >
                    <Row type="flex" justify="middle">
                        <Col span={5}><a href={info_href}> {v['name']} </a></Col>
                        <Col span={5}><SIcon type="gps"></SIcon></Col>
                        <Col span={4}><SIcon type="gprs" status="off"></SIcon></Col>
                        <Col span={5}><Switch defaultChecked={false} /></Col>
                        <Col span={5}><a href={alarm_href}>{v['alarm_num']}</a></Col>
                    </Row>


                    <Icon className="delete" data-imei={v['imei']} type="cross-circle-o" />
                </li>
            )
        });

        return (
            <div className="main">
                <HeadMain onAdd={this.addDevice}></HeadMain>

                <div className="thead">
                    <Row type="flex" justify="middle">
                        <Col span={5}>Device</Col>
                        <Col span={5}>GSM</Col>
                        <Col span={4}>GPRS</Col>
                        <Col span={5}>GPS</Col>
                        <Col span={5}>Alarm</Col>
                    </Row>
                </div>

                <Spin spinning={this.state.loading}>
                <div className="device-list">
                    <ul>
                        {myList}
                    </ul>
                </div>
                </Spin>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
