
import React,{Component} from 'react';

import {View,Text,Dimensions,Image,FlatList} from 'react-native'

var {height,width} = Dimensions.get('window')



export default class Search extends Component {
  
  static navigationOptions =({navigation})=>({

         tabBarIcon: ({ focused,tintColor }) => (focused == true ?
         <Image
           source={require('./../../assets/selected_bic_connect.png')}
           style={{width:width*.07, height: width*.07}}
         />
         :
         <Image
           source={require('./../../assets/unselected_bic_connect.png')}
           style={{width:width*.07, height: width*.07}}
         />
       ),
        // gesturesEnabled: false,
        // swipeEnabled: false,
        // animationEnabled:false,
       // tabBarVisible:(navigation.getParams('tabVisible') == null ? true : navigation.getParams('tabVisible') ),
       tabBarOnPress: (scene, defaultHandler) => {

         scene.navigation.navigate({
            routeName:'BicConnect',
           
          }
         )
       },
     })

  constructor(props){
  	super(props)
  	this.state={
  		text:'',
      data:[
        {image:require('./../../assets/img_1.jpg'),name:'Fashion'},
        {image:require('./../../assets/img_2.jpg'),name:'Sports'},
        {image:require('./../../assets/img_3.jpg'),name:'News'},
        {image:require('./../../assets/img_4.jpg'),name:'Travel'},
        {image:require('./../../assets/img_5.jpg'),name:'TV & Movies'}
      ]
  	}
  }

  renderFirstRow=(isReverse)=>{
    return(
      <View style = {{flexDirection:(isReverse ? 'row-reverse' : 'row')}}>
        <View>
          <View style = {{paddingRight:(isReverse ? 0 :width*.005),paddingBottom:width*.005}}>
            <Image
            style = {{width:width*.33,height:width*.33}}
            source = {require('./../../assets/img_1.jpg')}
            />
          </View>
          <View style = {{paddingRight:(isReverse ? 0 :width*.005),paddingBottom:width*.005}}>
            <Image
            style = {{width:width*.33,height:width*.33}}
            source = {require('./../../assets/img_2.jpg')}
            />
          </View>
        </View>
        <View style={{paddingRight:(isReverse ? width*.005 : 0)}} >
          <Image
          style = {{width:width*.665,height:width*.665}}
          source = {require('./../../assets/img_3.jpg')}
          />
        </View>
      </View>
    )
  }

  renderHorizontalRow=()=>{
    return(
      <View style = {{flexDirection:'row'}}>
        <View style={{paddingRight:width*.005 }} >
          <Image
          style = {{width:width*.33,height:width*.33}}
          source = {require('./../../assets/img_3.jpg')}
          />
        </View>
        <View style={{paddingRight:width*.005}} >
          <Image
          style = {{width:width*.33,height:width*.33}}
          source = {require('./../../assets/img_5.jpg')}
          />
        </View>
        <View>
          <Image
          style = {{width:width*.33,height:width*.33}}
          source = {require('./../../assets/img_4.jpg')}
          />
        </View>
      </View>
    )
  }

  _renderItem=(item,index)=>{
    return(
      <View style = {{width:width*.4,height:width*.25, backgroundColor:'lightgrey',alignItems:'center',justifyContent:'flex-end',borderRadius:width*.02, marginLeft:width*.03,marginRight:(index == this.state.data.length-1 ? width*.03:0)}}>
        
        <Image
        resizeMode= 'cover'
        style = {{position:'absolute',width:width*.4,height:width*.25,borderRadius:width*.02,}}
        source = {item.image}
        />
        
        <View style = {{paddingVertical:width*.04}}>
          <Text numberOfLines = {1} style = {{fontSize:width*.035,fontWeight:'bold',color:'white'}}>{item.name}</Text>
        </View>
      </View>
    )
  }


  renderHorizontalScroll=()=>{
    return(
      <FlatList
        horizontal = {true}
        showsHorizontalScrollIndicator= {false}
        data={this.state.data}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index})=>this._renderItem(item,index)}
      />
    )
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'white'}}>
        <View style = {{paddingVertical:width*.03}}>
          {this.renderHorizontalScroll()}
        </View>
        {this.renderFirstRow(false)}
  		  {this.renderHorizontalRow()}
      </View>
    )
  }
}