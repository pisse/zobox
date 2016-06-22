import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row } from 'antd';
import Head from '../component/Head'
import Heading from '../component/Heading';
import $ from "../bower_components/jquery/dist/jquery";
import Config from '../common/config';

var Services = Config.service;

class App extends Component {

    constructor(){
        super();

        this.state = {};
    }

    componentDidMount(){
        this.init();
    }

    init(){
        var that = this;

        //this.showLoading();

        util.request({
            url: Services.profile,
            type: "get",
            data: {},
            success: function(data){

                //that.closeLoading();

                $.extend(that.state, data);

                that.forceUpdate();


            },
            error: function(data){

                message.error(data.err_msg);
            }
        });
    }

    handleClick(){
        window.location.href = "./main.html";
    }

    render(){

        const { first_name,last_name,country,state,city, street, zipcode, ...others } = this.state;
        var mobile =  localStorage.getItem("mobile");

        return (
            <div className="profile">
                <Head title=""></Head>


                <Heading title="First Name" val={first_name}  className="mt5" type="multiple" shape="forward" icon="right" href="./chg_profile.html?p_t=1" ></Heading>
                <Heading title="Last Name" val={last_name} type="multiple" shape="forward" href="./chg_profile.html?p_t=2"></Heading>
                <Heading title="Country" val={country} type="multiple" ></Heading>
                <Heading title="Mobile" val={mobile} type="multiple" ></Heading>

                <Heading title="State" val={state} className="mt5" type="multiple" shape="forward" href="./chg_profile.html?p_t=4"></Heading>
                <Heading title="City" val={city} type="multiple" shape="forward" href="./chg_profile.html?p_t=5"></Heading>
                <Heading title="Street" val={street} className="" type="multiple" shape="forward" href="./chg_profile.html?p_t=6"></Heading>
                <Heading title="Post Code" val={zipcode} type="multiple" shape="forward" href="./chg_profile.html?p_t=7"></Heading>


                <Heading className="mt5" title="Change Password" type="multiple"  href="./chg_pwd.html"></Heading>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
