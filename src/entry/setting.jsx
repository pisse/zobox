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
                <Head title="Setting"></Head>

                <Heading className="mt5" title="Profile" type="multiple" shape="forward"  href="./profile.html"></Heading>
                <Heading title="General" type="multiple" shape="forward" href="./about.html"></Heading>
                <Heading className="mb5" title="About Us" type="multiple" shape="forward" href="./about.html"></Heading>

                <Heading className="none" title="Sign Out" type="single" shape="forward" icon="right" ></Heading>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
