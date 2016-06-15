import util from '../common/lib';
import Base from './_base';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row,Spin,Cascader } from 'antd';
import Head from '../component/Head'
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'
import classNames from 'classnames';
import $ from "../bower_components/jquery/dist/jquery";

import Config from '../common/config';

var Services = Config.service;

class App extends Base {

    constructor(){
        super();

        var params = util.getUrlParams();
        this.state = {
            btnActive: "",
            loading: false,
            p_t: params['p_t'],
            options: [{
                value: '1',
                label: 'American'
            },{
                value: '2',
                label: 'Britain'
            },{
                value: '3',
                label: 'China'
            }]
        };

        this.keyup = this.keyup.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.init();
    }

    init(){
        var that = this;
        var imie = this.state.imei;

        this.showLoading();

        util.request({
            url: Services.profile,
            type: "get",
            data: {
                imei: imie,
                mobile: "xx",
                skey: "xx"
            },
            success: function(data){

                    that.closeLoading();

                    $.extend(that.state, data);

                    that.forceUpdate();


            },
            error: function(data){
                message.error(data.err_msg);
            }
        });
    }

    getByType(type){
        var key = "";
        type = parseInt(type);

        switch (type){
            case 0:
                key = 'country';break;
            case 1:
                key = 'first_name';break;
            case 2:
                key = 'last_name';break;
            case 3:
                key = 'mobile';break;
            case 4:
                key = 'state';break;
            case 5:
                key = 'city';break;
            case 6:
                key = 'street';break;
            case 7:
                key = 'zipcode';break;
            default:
                key = ""; break;
        }

        return key;
    }

    handleClick(){
        var that = this;

        if(this.state.btnActive == "active"){

            this.showLoading();

            //var data = $.extend({}, this.state);
            const { first_name,last_name,country,state,city,street,zipcode, ...others } = this.state;

            var data = {
                first_name: first_name,
                last_name: last_name,
                country: country,
                state: state,
                city: city,
                street: street,
                zipcode: zipcode
            };

            var type = this.state.p_t;
            var key = this.getByType( type );

            var new_value = this.refs.ipt.value;
            data[key] = new_value;

            console.log(data)

            util.request({
                url: Services.modprofile,
                type: "get",
                data: data,
                success: function(data){

                        that.closeLoading();

                        window.history.go(-1);
                },
                error: function(data){

                }
            });
        }
    }

    keyup(){
        let new_val = this.refs.ipt.value;

        if(  new_val !="" ){
            this.state.btnActive = 'active';
        } else {
            this.state.btnActive = '';
        }
        this.forceUpdate();
    }


    render(){

        const { p_t, first_name,last_name,country,state,city, street, zipcode, ...others } = this.state;

        let btnCls =  classNames({
            "primary": true,
            "active": this.state.btnActive
        });

        var key = this.getByType( p_t );
        var old_val = this.state[key];

        var inp_str;
        if( key == "country" ){
            inp_str = <label htmlFor="country">
                            <span className="coutry-wrap">
                                 <Cascader options={this.state.options} onChange={this.onChange} defaultValue={["1"]} placeholder="Country"></Cascader>
                            </span>
                    </label>
        } else if( old_val ){
            inp_str = <input type="text" ref='ipt' id="name" defaultValue={old_val} onKeyUp={this.keyup} required/>
        }

        return (
            <div className="register">
                <Head title=""></Head>

                <Spin spinning={this.state.loading}  >
                    <form className="form no-icon mt5">
                        <label >
                            {inp_str}
                        </label>
                    </form>
                </Spin>

                <div className="sign_btn">
                        <Button type={btnCls} onClick={this.handleClick}>Confirm</Button>
                </div>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
