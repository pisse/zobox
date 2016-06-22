import '../common/lib';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Button,Row } from 'antd';
import Head from '../component/Head'


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
                    <input type="text" id="cur_pin" placeholder="Current PIN" value="aaa" onChange={this.onChange.bind(this)} required/>

                    <input type="password" id="new_pin" placeholder="New PIN" onChange={this.onChange.bind(this)} required/>

                    <input type="password" id="new_pin" placeholder="New PIN" onChange={this.onChange.bind(this)} required/>
                </form>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react_content'));
