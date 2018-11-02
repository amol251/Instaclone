import React,{ Component } from 'react';

import { View,Text,Dimensions,StyleSheet, Image,TextInput,TouchableOpacity } from 'react-native'

var { height,width } = Dimensions.get('window')

import { SegmentControl } from './../../components/SegmenteControl'

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const Tabs = [{id:'1',text:"Following",isSelected:true},{id:'2',text:"Followers",isSelected:false}]

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: 'white' }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: 'white' }]} />
);
 

export default class Likes extends Component {
	
	static navigationOptions =({navigation})=>({

        tabBarIcon: ({ focused,tintColor }) => (focused == true ?
        <Image
          source={require('./../../assets/selected_setting.png')}
          style={{width:width*.07, height: width*.07}}
        />
        :
        <Image
          source={require('./../../assets/unselected_setting.png')}
          style={{width:width*.07, height: width*.07}}
        />
      ),
      // tabBarVisible:false,
      tabBarOnPress: (scene, defaultHandler) => {

        scene.navigation.navigate({
           routeName:'Likes',
           
         }
        )
      },
    })

	constructor(props){
		super(props);
		this.state={
			
			index: 0,
		    routes: [
		      { key: 'first', title: 'Followers', isSelected:true },
		      { key: 'second', title: 'Following', isSelected:false },
		    ],
			
			
		}
	}

	renderLabel = ({ route }) => {
		console.log(route)
		return(
			<View style = {{paddingVertical:width*.03}}>
		    	<Text style = {{ color:(this.state.isSelected ? 'black' : 'lightgray')}}>{route.title}</Text>
		    </View>
		  )
		}

	_renderTabBar = props => {
	    return (
	      <TabBar
	        {...props}
	        indicatorStyle={styles.indicator}
	        renderLabel={this.renderLabel}
	        style={styles.tabbar}
	      />
	    );
	  };

	render(){
		return(
			<View style = {{flex:1,backgroundColor:'white'}}>
				<TabView
			        navigationState={this.state}
			        renderScene={SceneMap({
			          first: FirstRoute,
			          second: SecondRoute,
			        })}
			        renderTabBar={this._renderTabBar}
			        onIndexChange={Index => {

			        	// console.log('tab changed index',Index)

			        	var tempRoutes = this.state.routes

			        	tempRoutes.map((item,index)=>{
			        		console.log('index dsa sda',Index,index)
			        		if(Index == index){
			        			console.log('equal',item.isSelected)
			        			item.isSelected == true
			        		}else{
			        			// console.log('not equal',item)
			        			item.isSelected == false
			        		}
			        	})

			        	this.setState({index:Index,routes:tempRoutes})


			        	console.log('state.navParam',this.state,tempRoutes)
			        }}
			        initialLayout={{ width: Dimensions.get('window').width,height: Dimensions.get('window').height }}
			      />
			</View>
		)
	}

}




const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'red'
	},
	tabbar: {
    	backgroundColor: 'white',
	},
	indicator: {
	    backgroundColor: 'black',
	},
})
