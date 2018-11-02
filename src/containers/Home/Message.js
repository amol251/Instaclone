import React,{Component} from 'react';

import { View,TextInput,Dimensions,FlatList,Image,Text,ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'

var {height,width} =Dimensions.get('window')

export default class Message extends Component {

	constructor(props){
		super(props);
		this.state={
			data:[{name:'amol'},
				  {name:'ranjit'},
				  {name:'vish'},
				],
		}
	}	

	renderHeader=()=>{
		return(
			<View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:width*.03}}>
				<View style ={{flexDirection:'row',alignItems:'center'}}>
					<View style = {{paddingVertical:width*.03,marginRight:width*.03}}>
						<Icon
		                    name='ios-arrow-round-back'
		                    type='ionicon'
		                    />	
		            </View>
		            <Text style = {{fontWidth:'bold',color:'black'}}>New Message</Text>
		        </View>          
			</View>
			)
	}

	renderRepientsList=()=>{
		
		const usersList = ['Raghav','Rakesh','Prajwal']

		let userListView = []

		usersList.map((item,index)=>{
			userListView.push(
				<View style = {{backgroundColor:'skyblue',padding:width*.01,borderRadius:width*.01,marginRight:width*.01}}>
					<Text>{item}</Text>
				</View>
			)
		})
		return userListView
	}

	renderRecepientBar=()=>{
		return(
			<View style = {{borderBottomWidth:1,borderBottomColor:'gray',marginHorizontal:width*.04}}>
				<View style = {{flexDirection:'row',alignItems:'center',paddingVertical:width*.04}}>
	                <Text style = {{color:'black'}}>To:</Text>
	                <ScrollView
	                style = {{width:width*.8}}
	                containerContentStyle= {{flex:1}}
	                >
	                 <View style = {{flexDirection:'row'}}>
	                 	<View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
	                 		{this.renderRepientsList()}
	                 	</View>
	                 	<View style = {{flex:1,backgroundColor:'red'}}>
		                 	<TextInput 
			           		underlineColorAndroid ='transparent'
			           		placeholder='Search'
			           		style = {{flex:1}}
			           		/> 	
			           	</View>	
	                 </View>
	                </ScrollView>
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

	renderUserMessageList=()=>{
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
            	{this.renderHeader()}
            	{this.renderRecepientBar()}	
            	{this.renderUserMessageList()}
            </View>
        );
    }
}