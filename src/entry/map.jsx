import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal,DatePicker,Spin } from 'antd';
import MapHead from '../component/MapHead'
import $ from "../bower_components/jquery/dist/jquery";
import Config from '../common/config';

var Services = Config.service;

class App extends Base {

    constructor(){
        super();

        var params = util.getUrlParams();
        this.state = {
            loading: false,
            visible: false,
            imei: params['imei'],
            markers: []
        };

        this.onStartChange = this.onStartChange.bind(this);
        this.onEndChange = this.onEndChange.bind(this);

        this.initLinstenner();
    }

    initLinstenner(){
        var _self = this;
        $("#time_range").click(function(e){
            _self.state.visible = true;
            _self.forceUpdate();
        });
    }

    handleCancel(){
        this.state.visible = false;
        this.forceUpdate();
    }

    handleOk(){
        var start = this.state.startValue,
            end = this.state.endValue,
            imei = this.state.imei;

        var that = this;

        $.each( that.state.markers,function(i,marker){
            marker.setMap(null);
        });
        that.state.markers = []

        util.request({
            url: Services.ticklist,
            type: "get",
            data: {
                imei: imei,
                start:start,
                end:end
            },
            success: function(data){
                if(data.ticklist){
                    $.each(data.ticklist, function(i,v){
                        var pos = {
                            lat: v['latitude'],
                            lng: v['longitude']
                        };
                        var marker = new google.maps.Marker({
                            position: pos,
                            label: v['time'],
                            map: map
                        });

                        that.state.markers.push(marker);

                    });
                }
            },
            error: function(data){

                message.error(data.err_msg);
            }
        });

        this.state.visible = false;
        this.forceUpdate();

    }

    onStartChange(value){
        this.state.startValue = value;
        this.forceUpdate();
    }
    onEndChange(value){
        this.state.endValue = value;
        this.forceUpdate();
    }

    componentDidMount(){
        var that = this;

        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.43, lng: -74.00},
            zoom: 10,

            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        });

        var imei = this.state.imei;
        util.request({
            url: Services.ticklist,
            type: "get",
            data: {
                imei: imei,
                start:"",
                end:""
            },
            success: function(data){
                if(data.ticklist){
                    $.each(data.ticklist, function(i,v){
                        var pos = {
                            lat: v['latitude'],
                            lng: v['longitude']
                        };
                        var marker = new google.maps.Marker({
                            position: pos,
                            label: v['time'],
                            map: map
                        });

                        that.state.markers.push(marker);

                    });
                }
            },
            error: function(data){

                message.error(data.err_msg);
            }
        });

        $("#time_range").show();

    }

    render(){

        return (
            <div >
                <MapHead title="" placeholder="Search Location..."></MapHead>
                <Modal  className="map" title="" visible={this.state.visible} cancelText="Cancel"  okText="OK"  title="对话框标题"
                        onCancel={this.handleCancel.bind(this)} width="80%" onOk={this.handleOk.bind(this)}>
                    <p>
                        <DatePicker
                                    value={this.state.startValue}
                                    placeholder="Start Date"
                                    onChange={this.onStartChange} />

                        <DatePicker
                                    value={this.state.endValue}
                                    placeholder="End Date"
                                    onChange={this.onEndChange} />
                    </p>

                </Modal>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
