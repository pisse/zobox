import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Timeline, Icon, Tag } from 'antd';
import Head from '../component/Head'
import Heading from '../component/Heading';


class App extends Base {

    constructor(){
        super();

        this.state = {
            loading: false,
            devieceName: 'Door'
        }
    }

    onChange(){
        console.log(1);
    }

    render(){

        return (
            <div className="alarm">
                <Head className="mb10" title={this.state.devieceName}></Head>

                <div className="alart_content">
                    <Timeline>
                        <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
                        <Timeline.Item className="alarm_date" dot={<div><Icon type="calendar" /><p  className="alarm_date_year">2015</p></div>} color="red"></Timeline.Item>
                        <Timeline.Item className="alarm_date alarm_date_custom" dot={<div><p  className="alarm_date_time"><span>03.21</span><br/><span>08:11:09</span></p></div>}>
                            <p className="alarm_content">初步排除网络异常 2015-09-01</p></Timeline.Item>
                        <Timeline.Item className="alarm_date alarm_date_custom" dot={<div><p  className="alarm_date_time"><span>03.28</span><br/><span>12:25:09</span></p></div>} color="red">
                            <p className="alarm_content">初步排除网络异常初步排除网络异常，初步排除网络异常，初步排除网络异常，初步排除网络异常，初步排除网络异常，初步排除网络异常，初步排除网络异常，初步排除网络异常，初步排除网络异常</p>
                        </Timeline.Item>
                        <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
                    </Timeline>
                </div>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
