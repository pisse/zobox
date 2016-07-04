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

    componentDidMount(){
        this.initLinstenner();
    }

    initLinstenner(){
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }

    handleClick(){
        window.location.href = "./main.html";
    }

    onDeviceReady(){
        alert(typeof sms);
        alert(typeof device)
    }


    testSMS(){

       alert("start");
        var number = "18621571903";
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
       alert("before sent" + number +'| '+ message);
       alert(typeof sms);
        alert(typeof device)
       alert(device.cordova);
        sms.send(number, message, options, success, error);
       alert("end");
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
