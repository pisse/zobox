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

        this.testSMS = this.testSMS.bind(this);

       /* document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            alert(1)
            alert(typeof  device);
            alert(2)
        }*/

    }

    handleClick(){
        window.location.href = "./main.html";
    }

    testSMS(){

       //alert("start");
        var number = "18600557240";
        var message = "message test from zobox";

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        alert("before sent" + number +'| '+ message + (typeof sms));
        sms.send(number, message, options, success, error);
    }

    render(){

        return (
            <div className="setting ">
                <Head title="Support"></Head>
                <p className="mt5">
                    a link to the web site for “frequently asked questions”.
                </p>

                <div className="mt5">
                    <Button onClick={this.testSMS}>Contract Us</Button>
                </div>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
