import '../common/lib';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row } from 'antd';
import Head from '../component/Head'
import Heading from '../component/Heading';
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'


class App extends Component {

    constructor(){
        super();
    }

    handleClick(){
        window.location.href = "./main.html";
    }

    render(){

        return (
            <div className="setting ">
                <Head title="About Us"></Head>
                <Logo type="black" version="V1.0.1"></Logo>

                <Heading className="mt5" title="About Us" type="multiple" shape="forward"  href="./profile.html"></Heading>
                <Heading title="General" type="About Us" shape="forward" ></Heading>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
