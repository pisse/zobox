import '../common/lib';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row,Col,Switch } from 'antd';
import Head from '../component/Head'
import Heading from '../component/Heading';
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'


class App extends Component {

    constructor(){
        super();

        this.state = {
            devieceName: 'Door'
        }
    }

    onChange(){
        console.log(1);
    }

    render(){

        return (
            <div className="device">
                <Head className="mb5" title={this.state.devieceName}></Head>

                <Heading title="Map" type="single" shape="forward" icon="right" href="./map.html" ></Heading>
                <Heading title="Alarm" type="single" shape="switch" ></Heading>
                <Heading title="GPS" type="single" shape="switch" ></Heading>

                <Heading title="Users" type="multiple" shape="forward" href="./users.html"></Heading>
                <Heading title="PIN" type="multiple" shape="forward" href="./pin.html" ></Heading>
                <Heading title="Sensitivity" className="mb5" type="multiple" shape="forward"  ></Heading>

                <Heading title="Device IMEI" type="multiple" shape="forward" icon="right" ></Heading>
                <Heading title="SIM IMEI" type="multiple" shape="forward" icon="right" ></Heading>
                <Heading title="SIM Phone#" type="multiple" className="mb5" shape="forward" icon="right" ></Heading>

                <Heading title="Device Name" type="single" shape="forward" icon="right" ></Heading>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react_content'));
