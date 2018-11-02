import React,{ Component } from 'react';

import firebase from './../../firebase';

import Login from './Login'

import SignUp from './../SignUp/SignUpContainer'


export default class LoginContainer extends Component {

    constructor(props){
    	super(props);
    	this.state = {};
    }

    onLogin =(email,pass)=> {

      firebase.auth()
                .signInAnonymously()
                .then(() => {
                    // const { name, avatar } = getState().user;

                    firebase.database()
                            .ref(`users/amol`)
                            .set({
                                email,
                                pass
                            });

                    // startChatting(dispatch);
                });

    };

    signUp =() =>{
      <SignUp />
    };

    LangChange=()=>{

    };

    signingInHelp=()=>{

    };

    render() {
        return (
          <Login
            onLangChange = {this.LangChange.bind(this)}
            onLogin = {this.onLogin.bind(this)}
            onSigningInHelp = {this.signingInHelp.bind(this)}
            onSignUp = {this.signUp.bind(this)} />
        );
    }
}
