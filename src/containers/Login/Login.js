import React,{ Component } from 'react';

import { TextFld, Button } from './../../components'

import { View, StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';

import { Image } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        email:'',
        password:''
      };
    }

    render() {

      const { onLangChange, onLogin, onSigningInHelp, onSignUp } = this.props;

        return (
          <View style={{flex:1}}>
            <View style = {styles.langPicker}>
              <TouchableOpacity onPress={onLangChange}>
                <Text>English</Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.imageView}>
              <Image
                style = {styles.imageStyle}
                source={require('./../../assets/Instagram_logo.png')}
              />
            </View>
            <View style = {styles.container}>
              <TextFld placeholder={"Email"} onChange={(text)=>{this.setState({email:text})}} />
              <TextFld style = {styles.txtbackgroundView} placeholder={"Password"} onChange={(text)=>{
                this.setState({password:text})}} />
              <Button style = {styles.button} text={"Login"} onPress={()=>{
                onLogin(this.state.email,this.state.password)
                this.setState({email:'',password:''})
              }
              } />
            </View>
            <View style = {styles.signinContent}>
              <Text style = {{color:'grey'}}> Forgot your login details?</Text>
              <TouchableOpacity onPress = {onSigningInHelp}>
                 <Text style={{color: 'black',fontSize: 14}}> Get help signing in.</Text>
              </TouchableOpacity>
            </View>
            <View style = {{justifyContent:'center', flex:1,flexDirection:'row'}}>
                 <View style={styles.hairline} />
                 <Text style = {{color:'grey', paddingHorizontal:5}}> OR </Text>
                 <View style={styles.hairline} />
            </View>

            <View style = {styles.signUpContent}>
              <Text style = {{color:'grey'}}> Don't have an account?</Text>
              <TouchableOpacity onPress = {onSignUp}>
                 <Text style={{color: 'black',fontSize: 14}}> Sign up.</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}


const styles = StyleSheet.create({
  button:{
    borderRadius:width*.03,
    backgroundColor:'skyblue',
    alignItems:'center',
    padding:width*.05,
  },
  container:{
    paddingHorizontal: width*.05,
  },
  imageStyle:{
    width: width*.65,
    height: width*.2,
  },
  imageView:{
    paddingVertical: width*.05,
    alignItems: 'center',
    marginTop: width*.12
  },
  langPicker:{
    alignItems: 'center'
  },
  signUpContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: width*.05,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
  },
  signinContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: width*.05
  },
  hairline: {
    backgroundColor: 'grey',
    height: 1,
    width: width*0.3,
    marginTop:width*.026,
  },
  txtbackgroundView:{
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: width*.02,
    justifyContent: 'center',
    borderColor: 'grey',
    marginVertical: width*.05
  }
});
