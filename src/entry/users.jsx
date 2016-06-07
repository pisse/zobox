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

    onChange(val){
        console.log(val);
    }

    render(){

        return (
            <div className="register">
                <Head title="Users"></Head>

                <form className="form no-icon mt5">
                    <input type="text" id="user1" placeholder="User1" value="aaa" onChange={this.onChange.bind(this)} required/>

                    <input type="password" id="user2" placeholder="User2" onChange={this.onChange.bind(this)} required/>

                    <input type="password" id="user3" placeholder="User3" onChange={this.onChange.bind(this)} required/>
                </form>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
