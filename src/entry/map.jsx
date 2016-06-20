import '../common/lib';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal,DatePicker } from 'antd';
import MapHead from '../component/MapHead'
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'
import $ from "../bower_components/jquery/dist/jquery";


class App extends Component {

    constructor(){
        super();

        this.state = {
            visible: false
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
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,

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
        /*var map = new BMap.Map("map");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        //map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        //map.setZoom(11);
        map.setCurrentCity("上海市");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.addControl(new BMap.NavigationControl({
            anchor:BMAP_ANCHOR_BOTTOM_LEFT
        }));
        map.addControl(new BMap.ScaleControl({}));
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
        map.addControl(new BMap.GeolocationControl());*/

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
