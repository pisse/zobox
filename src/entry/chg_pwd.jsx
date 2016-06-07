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

    handleClick(){
        window.location.href = "./main.html";
    }

    render(){

        return (
            <div className="register">
                <Head title="Change Password"></Head>

                <form className="form no-icon mt5">
                    <input type="text" id="email" placeholder="Old Password" required/>

                    <input type="password" id="pwd" placeholder="New Password" required/>
                </form>

                <div className="sign_btn">
                        <Button type="primary" onClick={this.handleClick.bind(this)}>Confirm</Button>
                </div>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
