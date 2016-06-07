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
            <div className="profile">
                <Head title=""></Head>


                <Heading title="First Name"  className="mt5" type="multiple" shape="forward" icon="right" ></Heading>
                <Heading title="Last Name" type="multiple" shape="forward" ></Heading>
                <Heading title="Email" type="multiple" shape="forward" ></Heading>
                <Heading title="Country" type="multiple" shape="forward" ></Heading>
                <Heading title="Mobile" type="multiple" shape="forward" ></Heading>

                <Heading title="Street" className="mt5" type="multiple" shape="forward" ></Heading>
                <Heading title="City" type="multiple" shape="forward" ></Heading>
                <Heading title="Post Code" type="multiple" shape="forward" ></Heading>
                <Heading title="State" className="mb5" type="multiple" shape="forward" ></Heading>


                <Heading className="mt5" title="Change Password" type="multiple" shape="forward"  href="./chg_pwd.html"></Heading>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
