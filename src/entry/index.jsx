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
            <div className="sign_on ">
                <Head title="Sign on"></Head>
                <Logo></Logo>

                <form className="form">
                    <label className="email" htmlFor="email">
                        <input type="text" id="email" placeholder="Email" required/>
                    </label>

                    <label className="pwd" htmlFor="pwd">
                        <input type="password" id="pwd" placeholder="Password" required/>
                    </label>
                </form>

                <div className="sign_btn">
                        <Button type="primary">Sign In</Button>
                    <br/>
                        <Checkbox defaultChecked={false} onChange={this.onChange}>Forget Password</Checkbox>
                    <br/>
                    <p className="reg_btn">
                        <Button type="primary">Register</Button>
                    </p>

                </div>

                <PageTail/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
