import '../common/lib';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Alert} from 'antd';
import Head from '../component/Head'
import Logo from '../component/Logo'
import PageTail from '../component/PageTail'
import reqwest from 'reqwest';
import classNames from 'classnames';


class App extends Component {

    constructor(){
        super();

        this.state = {
            infoCls: "none"
        }
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    onChange(){
        console.log(1);
    }

    login(){
        var email = this.refs.email.value;
        var pwd = this.refs.pwd.value;

        this.state.infoCls = "";

        this.forceUpdate();

        setTimeout(function(){
            window.location.href = "./register.html";
        }, 1000)


    }
    register(){

    }

    render(){

        let is_none = this.state.infoCls;
        let info_cls = classNames({
            wrap_info: true,
            none: is_none,
        });
        return (
            <div className="sign_on ">
                <Head title="Sign on" bcls="none"></Head>
                <Logo></Logo>

                <form className="form">
                    <label className="email" htmlFor="email">
                        <input type="text" ref="email" id="email" placeholder="Email" required/>
                    </label>

                    <label className="pwd" htmlFor="pwd">
                        <input type="password"  ref="pwd" id="pwd" placeholder="Password" required/>
                    </label>
                </form>


                <div className="sign_btn">

                    <div className={info_cls}>
                        <Alert message=""
                               description="No worries.We will send you a Email to your registered account.Please sign on with your temporary password. Once
                           you  signed on,please update your password"
                               type="info" />
                        <Button type="primary" onClick={this.login}>Sign In</Button>
                    </div>

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
