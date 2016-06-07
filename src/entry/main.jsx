import '../common/lib';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row,Col,Switch } from 'antd';
import HeadMain from '../component/HeadMain'
import Logo from '../component/Logo'
import SIcon from '../component/SIcon'
import PageTail from '../component/PageTail'


class App extends Component {

    constructor(){
        super();
    }

    onChange(){
        console.log(1);
    }

    render(){

        return (
            <div className="main">
                <HeadMain></HeadMain>

                <div className="thead">
                    <Row type="flex" justify="middle">
                        <Col span={5}>Device</Col>
                        <Col span={5}>GSM</Col>
                        <Col span={4}>GPRS</Col>
                        <Col span={5}>GPS</Col>
                        <Col span={5}>Alarm</Col>
                    </Row>
                </div>

                <div className="device-list">
                    <Row type="flex" justify="middle">
                        <Col span={5}><a href="./device.html">Door</a></Col>
                        <Col span={5}><SIcon type="gps"></SIcon></Col>
                        <Col span={4}><SIcon type="gprs" status="off"></SIcon></Col>
                        <Col span={5}><Switch defaultChecked={false} /></Col>
                        <Col span={5}><a href="./alarm.html">1212</a></Col>
                    </Row>
                    <Row type="flex" justify="middle">
                        <Col span={5}><a href="./device.html">Door</a></Col>
                        <Col span={5}><SIcon type="gps"></SIcon></Col>
                        <Col span={4}><SIcon type="gprs"></SIcon></Col>
                        <Col span={5}><Switch defaultChecked={false} /></Col>
                        <Col span={5}><a href="./alarm.html">1212</a></Col>
                    </Row>
                    <Row type="flex" justify="middle">
                        <Col span={5}><a href="./device.html">Door</a></Col>
                        <Col span={5}><SIcon type="gps"></SIcon></Col>
                        <Col span={4}><SIcon type="gprs"></SIcon></Col>
                        <Col span={5}><Switch defaultChecked={false} /></Col>
                        <Col span={5}><a href="./alarm.html">1212</a></Col>
                    </Row>
                </div>


            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
