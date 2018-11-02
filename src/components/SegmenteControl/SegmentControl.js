import React,{ Component } from 'react'
import { View, ViewPropTypes, TouchableOpacity, Text, Dimensions, StyleSheet} from "react-native";
import styles from "./style";
import PropTypes from 'prop-types';

var {height,width} = Dimensions.get('window')

export const SegmentControl = props => {

    const { onTap,tabArr } = props;

    const controlTab = [];

    var Arr = tabArr

    onTouch=(items)=>{
      onTap(items)
    }

    Arr.map((items) =>
      controlTab.push(
        <TouchableOpacity key = {items.id} 
        style = {{alignItems:'center',flex:1,borderBottomWidth:1,borderBottomColor:'black',paddingVertical:width*.05,borderBottomWidth:(items.isSelected == true)? 2 : 1}} 
        onPress={()=> this.onTouch(items)}>
          <View key = {items.id} >
            <Text key = {items.id} style = {{ fontWeight:(items.isSelected == true)? 'bold' : 'normal'}}>{items.text}</Text>
          </View>
        </TouchableOpacity>
      )
    );

    return (
      <View style = {{flexDirection:'row', marginBottom:width*.05}}>
        {controlTab}
      </View>
    )
}


// <View key = {items.id} style = {{alignItems:'center',flex:1,borderBottomWidth:1,borderBottomColor:'black',paddingVertical:width*.05,borderBottomWidth:(items.isSelected == true)? 2 : 1}}>
//           </View>

          
const style = StyleSheet.create({
  tabView:{
    alignItems:'center',
    flex:1,
    borderBottomWidth:1,
    borderBottomColor:'black',
    paddingVertical:width*.05,
  },
})
