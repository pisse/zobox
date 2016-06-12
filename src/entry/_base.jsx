import React,{ Component } from 'react';


export default class Base extends Component {

    constructor(){
        super();

        this.state = {
            loading: false
        };
    }

    showLoading(){
        this.state.loading = true;
        this.forceUpdate();
    }
    closeLoading(){
        this.state.loading = false;
        this.forceUpdate();
    }

}


