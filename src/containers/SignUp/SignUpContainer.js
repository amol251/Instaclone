import React,{ Component } from 'react';

import SignUp from './SignUp'

import firebase from './../../firebase';

import { SegmentControl } from './../../components/SegmenteControl'

export default class SignUpContainer extends Component {

    constructor(props){
    	super(props);
    	this.state = {
        tabArr : [{text:'PHONE',isSelected:true},{text:'EMAIL',isSelected:false}]
      };
    }

    onNext =(email)=> {
      firebase.database()
              .ref(`users/${email}`)
              .set({
                  email
              });
    }

    render() {

        return (

          <SignUp onNext = {this.onNext.bind(this)}/>

        );
    }
}
