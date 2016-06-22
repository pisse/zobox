import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row } from 'antd';
import Head from '../component/Head'
import Heading from '../component/Heading';

import Config from '../common/config';

var Services = Config.service;

class App extends Base {

    constructor(){
        super();

        this.state = {
            loading: false
        };

        this.signOut = this.signOut.bind(this);
    }

    signOut(){
        var that = this;
        util.request({
            url: Services.logout,
            type: "get",
            data: {},
            success: function(data){

                window.location.href = "./index.html";

            },
            error: function(data){
                message.error(data.err_msg);
            }
        });
    }

    render(){

        return (
            <div className="setting ">
                <Head title=""></Head>

                <Heading className="mt5" title="Profile" type="multiple" shape="forward"  href="./profile.html"></Heading>
                <Heading title="General" type="multiple" shape="forward" href="./about.html"></Heading>
                <Heading className="mb5" title="About Us" type="multiple" shape="forward" href="./about.html"></Heading>

                <Heading className="none" title="Sign Out" type="single" shape="forward" icon="right" click={this.signOut} ></Heading>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
