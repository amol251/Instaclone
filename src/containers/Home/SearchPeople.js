import React,{Component} from 'react';

import { View,TextInput,Dimensions,FlatList,Image,Text } from 'react-native'
import { Icon } from 'react-native-elements'

var {height,width} = Dimensions.get('window')

export default class SearchPeople extends Component {

	constructor(props){
		super(props);
		this.state={
			data:[{name:'amol'},
				  {name:'ranjit'},
				  {name:'vish'},
				],

		}
	}	

	renderSearchBar=()=>{
		return(
			<View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:width*.03}}>
				<View style ={{flexDirection:'row',alignItems:'center'}}>
					<View style = {{paddingVertical:width*.03,marginRight:width*.03}}>
						<Icon
		                    name='ios-arrow-round-back'
		                    type='ionicon'
		                    />	
		            </View>
		           	<TextInput 
		           		underlineColorAndroid ='transparent'
		           		placeholder='Search'
		           		style = {{width:width*.87 ,height:height*.07}}
		           	/>
		        </View>    
			</View>
		)
	}

	_renderItem=()=>{
		return(
			<View style ={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', paddingHorizontal:width*.04,paddingVertical:width*.02}}>
				<View style = {{flexDirection:'row',alignItems:'center'}}>
					<View style = {{width:width*.15,height:width*.15,borderRadius:width*.15/2}}>
						<Image
						style = {{width:width*.15,height:width*.15,borderRadius:width*.15/2}}
						source = {require('./../../assets/img_1.jpg')}
						/>
					</View>
					<View style = {{ marginLeft:width*.03}}>
						<Text>name</Text>
						<Text>time</Text>
					</View>
				</View>
				<View>
					<Icon
	                    name='camera'
	                    type='evilicon'
	                    />
				</View>
			</View>
		)
	}

	renderSearchedPeopleList=()=>{
		return(
			<FlatList
		        data={this.state.data}
		        extraData={this.state}
		        keyExtractor={(item, index) => String(index)}
		        renderItem={this._renderItem}
		      />
		)
	}

    render() {
        return (
            <View>
            	{this.renderSearchBar()}
            	{this.renderSearchedPeopleList()}
            </View>
        );
    }
}