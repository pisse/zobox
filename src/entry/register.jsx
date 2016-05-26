import '../common/lib';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row } from 'antd';
import Head from '../component/Head'
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'


class App extends Component {

    constructor(){
        super();
    }

    onChange(){
        console.log(1);
    }

    render(){

        return (
            <div className="register ">
                <Head title="Register"></Head>
                <Logo></Logo>

                <form className="form">
                    <label className="email" htmlFor="email">
                        <input type="text" id="email" placeholder="Email" required/>
                    </label>

                    <label className="pwd" htmlFor="pwd">
                        <input type="password" id="pwd" placeholder="Password" required/>
                    </label>

                    <label className="confirm_pwd" htmlFor="confirm_pwd">
                        <input type="password" id="confirm_pwd" placeholder="Confirm Password" required/>
                    </label>

                    <label className="country" htmlFor="country">
                        <input type="text" id="country" placeholder="Country" required/>
                    </label>

                    <label className="mobile" htmlFor="mobile">
                        <input type="text" id="mobile" placeholder="Mobile" required/>
                    </label>

                    <label className="imei" htmlFor="imei">
                        <input type="text" id="imei" placeholder="Imei" required/>
                    </label>
                </form>

                <div className="sign_btn">
                        <Button type="primary">Register</Button>
                </div>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
