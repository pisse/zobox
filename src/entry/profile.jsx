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
                <Head title="Profile"></Head>


                <Heading title="First Name"  className="mt5" type="multiple" shape="forward" icon="right" href="./chg_profile.html?p_t=1" ></Heading>
                <Heading title="Last Name" type="multiple" shape="forward" href="./chg_profile.html?p_t=2"></Heading>
                <Heading title="Country" type="multiple" shape="forward" href="./chg_profile.html?p_t=0"></Heading>
                <Heading title="Mobile" type="multiple" shape="forward" href="./chg_profile.html?p_t=3"></Heading>

                <Heading title="State" className="mt5" type="multiple" shape="forward" href="./chg_profile.html?p_t=4"></Heading>
                <Heading title="City" type="multiple" shape="forward" href="./chg_profile.html?p_t=5"></Heading>
                <Heading title="Street" className="" type="multiple" shape="forward" href="./chg_profile.html?p_t=6"></Heading>
                <Heading title="Post Code" type="multiple" shape="forward" href="./chg_profile.html?p_t=7"></Heading>


                <Heading className="mt5" title="Change Password" type="multiple" shape="forward"  href="./chg_pwd.html"></Heading>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
