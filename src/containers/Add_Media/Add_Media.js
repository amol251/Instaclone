
import React,{Component} from 'react';

import {View,Text,Image,Dimensions} from 'react-native';

import Gallery from './../../components/Gallery/App'

let W = Dimensions.get('window').width
let H = Dimensions.get('window').height

export default class Add_Media extends Component {
  
  static navigationOptions =({navigation})=>({

        tabBarIcon: ({ focused,tintColor }) => (focused == true ?
        <Image
          source={require('./../../assets/selected_help_desk.png')}
          style={{width:W*.07, height: W*.07}}
        />
        :
        <Image
          source={require('./../../assets/unselected_help_desk.png')}
          style={{width:W*.07, height: W*.07}}
        />
      ),
      // tabBarVisible:(navigation.getParams('tabVisible') == null ? true : navigation.getParams('tabVisible') ),
      tabBarOnPress: (scene, defaultHandler) => {

        scene.navigation.navigate({
           routeName:'BicCard',
         }
        )
      },
    })
  
  constructor(props){
  	super(props)
  	this.state={
  		text:''
  	}
  }

  render() {
    return (
		  <Gallery/>
    )
  }
}