import '../common/lib';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row } from 'antd';
import Head from '../component/Head'
import Heading from '../component/Heading';
import Logo from '../component/Logo'


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

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
