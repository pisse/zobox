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
                <Head title="Help"></Head>
                <p className="mt5">
                    show all commands and explanation.
                </p>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
