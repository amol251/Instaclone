import React,{ Component } from 'react';

import { TextFld, Button } from './../../components'

import { View, StyleSheet, Dimensions, TouchableOpacity, Text, ScrollView} from 'react-native';

import { SegmentControl } from './../../components/SegmenteControl'

import { Image } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class SignUp extends Component {
    constructor(props){
    	super(props);
      this.state = {
        email:'',
        tabArr : [{id:1, text:'PHONE', isSelected:true},{id:2, text:'EMAIL', isSelected:false}]
      };
    }

    onChageTab=(items)=> {

      for (var i = 0; i < this.state.tabArr.length; i++) {
        if (items.id == this.state.tabArr[i].id){
          this.state.tabArr[i].isSelected = true
          this.state.tabArr[i] = this.state.tabArr[i]
        }else {
          this.state.tabArr[i].isSelected = false
          this.state.tabArr[i] =this.state.tabArr[i]
        }
      }
      this.setState({tabArr:this.state.tabArr})

    }

    onNext =()=> {

    }

    render() {

      const { onNext } = this.props;

        return (
          <ScrollView>
            <View style = {{alignItems:'center'}}>
              <Image
              style = { styles.imageStyle}
              source = {require('./../../assets/default_pic.png')}
              />
            </View>
            <View style = {styles.container}>
              <SegmentControl onTap = {this.onChageTab} tabArr={this.state.tabArr} />
              <TextFld placeholder={"Email"} onChange={(text)=>{this.setState({email:text})}} />
              <View style = {{alignItems:'center',paddingVertical:width*.05}}>
                <Text style = {{textAlign:'center'}}>You may receive SMS updates from instagram and can opt out at any time.</Text>
              </View>
              <Button style = {styles.button} text={"Next"} onPress={()=>this.onNext(this.state.email)} />
            </View>
          </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
  container:{
    paddingHorizontal: width*.05,
    paddingVertical: width*.02
  },
  imageStyle:{
    width: width*.35,
    height: width*.35,
  },
  button:{
    borderRadius:width*.03,
    backgroundColor:'skyblue',
    alignItems:'center',
    padding:width*.05,
  },
});
