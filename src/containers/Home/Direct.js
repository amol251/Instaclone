import React,{Component} from 'react';

import { View, Text, Dimensions,ScrollView,FlatList,Image,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
var {height,width} = Dimensions.get('window')

export default class Direct extends Component {

	constructor(props){
		super(props);
		this.state={
			data:[{name:'amol'},
				  {name:'ranjit'},
				  {name:'vish'},
				],
		}
	}	

	static navigationOptions =({navigation})=>({
        // swipeEnabled: true,
        // animationEnabled:false,
       
      tabBarVisible:false,
      
    })

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
		            <Text style = {{fontWeight:'bold',color:'black'}}>Direct</Text>
		        </View> 
		        <View>
		        	<Icon
	                    name='ios-add'
	                    type='ionicon'
	                    />	
		        </View>           
			</View>
			)
	}

	searchBar=()=>{
		return(
			<TouchableOpacity
			onPress= {this.onSearch}
			>
				<View style = {{borderBottomWidth:1,borderBottomColor:'gray',marginHorizontal:width*.04}}>
					<View style = {{flexDirection:'row',alignItems:'center',paddingVertical:width*.04}}>
						<Icon
		                    name='search'
		                    type='evilicon'
		                    />	
		                <View style = {{paddingLeft:width*.02}}>
		                	<Text>Search</Text>
		                </View>    
					</View>
				</View>
			</TouchableOpacity>	
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

	renderUsersMessages=()=>{
		return(
			<ScrollView>
			{this.searchBar()}
			{this.renderUserMessageList()}
			</ScrollView>
		)
	}

	renderCamera=()=>{
		return(
			<View style = {{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
				<View style = {{flexDirection:'row'}}>
					<Icon
	                    name='camera'
	                    type='evilicon'
	                    />
	                <View style ={{marginLeft:width*.03}}>
	                	<Text style = {{fontWeight:'bold'}}>Camera</Text>
	                </View>   
				</View>
			</View>
		)
	}

    render() {
        return (
            <View style = {{flex:1,backgroundColor:'white'}}>
            	<View style = {{flex:12}}>
	            	{this.renderHeader()}
	            	{this.renderUsersMessages()}
            	</View>
            	<View style = {{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgb(299,299,299)',borderTopColor:'lightgray',borderTopWidth:1}}>
            		{this.renderCamera()}
            	</View>
            </View>
        );
    }
}

  