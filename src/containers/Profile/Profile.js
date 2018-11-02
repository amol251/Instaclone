import React,{ Component } from 'react';

import { View,Text,Dimensions,Image,TextInput,TouchableOpacity,StyleSheet,ScrollView } from 'react-native'

var { height,width } = Dimensions.get('window')

import { Icon } from 'react-native-elements'

import Cards from './../../components/Draggable_Images/App'

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
	<ScrollView>
      <View style = {{flexDirection:'row',flexWrap:'wrap'}}>
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
    </ScrollView>

);
const SecondRoute = () => (
   <ScrollView>
   	<Cards/>
   </ScrollView>
);
const ThirdRoute = () => (
  <ScrollView>
      <View style = {{flexDirection:'row',flexWrap:'wrap'}}>
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
    </ScrollView>
);
 

export default class Profile extends Component {

	constructor(props){
		super(props);
		this.state={
			
			index: 0,
		    routes: [
		      { key: 'first', icon: 'md-chatbubbles' },
		      { key: 'second',icon: 'md-contact' },
		      { key: 'third',icon: 'md-list' },
		    ],
			
			
		}
	}

	static navigationOptions =({navigation})=>({

         tabBarIcon: ({ focused,tintColor }) => (focused == true ?
         <Image
           source={require('./../../assets/selected_profile.png')}
           style={{width:width*.07, height: width*.07}}
         />
         :
         <Image
           source={require('./../../assets/unselected_profile.png')}
           style={{width:width*.07, height: width*.07}}
         />
       ),
       // tabBarVisible:(navigation.getParams('tabVisible') == null ? true : navigation.getParams('tabVisible') ),
       tabBarOnPress: (scene, defaultHandler) => {

         scene.navigation.navigate({
            routeName:'SettingsScreen',
          }
         )
       },
     })

	renderUserDetailsSection=()=>{

		let detailsArr = [];

		const DETAILS_HEADING = ["Posts","Follower","Following"]

		DETAILS_HEADING.map((item,index)=>{
			detailsArr.push(
				<View key = {String(index)} style ={{paddingHorizontal:width*.03,alignItems:'center'}}>
					<Text style = {{color:'black',fontWeight:'bold'}}>100</Text>
					<Text>{item}</Text>
				</View>
			)
		})

		return(
			<View>
				<View style={{flexDirection:'row', justifyContent:'space-between'}}>
					{detailsArr}
				</View>
				<TouchableOpacity style = {{borderRadius:width*.01,alignItems:'center',borderWidth:1,borderColor:'lightgrey',paddingVertical:width*.01, marginVertical:width*.02}}>
					<Text style = {{color:'black',fontWeight:'bold'}}>Edit Profile</Text>
				</TouchableOpacity>
			</View>	
		)
	}

	renderProfilePicture=()=>{
		return(
			<View style = {{ width:width*.25,height:width*.25,borderRadius:width*.25/2 }}>
				<Image
				// resizeMode='contain'
				style = {{width:width*.25,height:width*.25,borderRadius:width*.25/2}}
				source = {require('./../../assets/water.jpg')}
				/>
				<View style = {{position:'absolute',bottom:0,right:0,borderWidth:2,borderColor:'white',borderRadius:width*.07/2}}>
					<Image
					// resizeMode='contain'
					style = {{width:width*.06,height:width*.06}}
					source = {require('./../../assets/add_Profile_Pic.png')}
					/>
				</View>
			</View>
		)
	}

	renderHorizontalSegment=()=>{

		// let imageArr = [];

		// const IMAGE_DATA = [,,require('./../../assets/logo.png')]

		// IMAGE_DATA.map((item,index)=>{
		// 	imageArr.push(
		// 		<View key = {String(index)} style = {{padding:width*.03}}>
		// 			<Image
		// 			style = {{width:width*.06,height:width*.06}}
		// 			source = {item}
		// 			/>
		// 		</View>
		// 	)
		// })

		return(
			<View style = {{flexDirection:'row',justifyContent:'space-around',borderTopWidth:1,borderBottomWidth:1,borderTopColor:'lightgrey',borderBottomColor:'lightgrey'}}>
				<View style = {{width:width/3, paddingVertical:width*.02}}>
					<Icon
                      name='ios-apps'
                      type='ionicon'
                      />
				</View>
				<View style = {{width:width/3,paddingVertical:width*.02}}>
					<Icon
                      name='ios-list'
                      type='ionicon'
                      />
				</View>
				<View style = {{width:width/3,paddingVertical:width*.02}}>
					<Icon
                      name='ios-people'
                      type='ionicon'
                      />
				</View>
			</View>
		)
	}

	renderHeader=()=>{
		return(
			<View elevation={1} style = {{paddingHorizontal:width*.03,paddingVertical:width*.03, flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'white'}}>
				<View style = {{flexDirection:'row'}}>
					<Text style = {{color:'black',fontWeight:'bold'}}>amolbotare</Text>
				</View>
				<View style = {{flexDirection:'row'}}>
					<View style = {{paddingHorizontal:width*.02}}>
						<Icon
	                      name='history'
	                      type='font-awesome'/>
					</View>
					<View style = {{paddingHorizontal:width*.02}}>
			         <Icon
				          name='menu'
				          // type='font-awesome'
				          />	
				    </View> 
				</View>
			</View>
		)
	}

	// <View>
	// 	<Image
	// 		source = {require('./../../assets/down.png')} 
	// 	/>
	// </View>

	_renderIcon = ({ route }) => (
	    <Icon type ="ionicon" name={route.icon} size={width*.065} color="black" />
	  );

	_renderTabBar = props => {
	    return (
	      <TabBar
	        {...props}
	        indicatorStyle={styles.indicator}
	        renderIcon={this._renderIcon}
	        style={styles.tabbar}
	      />
	    );
	  };


	render(){
		return(
			<View style = {{flex:1,backgroundColor:'white'}}>
				{this.renderHeader()}
				<View style = {{paddingVertical:width*.05}}>
					<View style = {{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:width*.02}}>
						<View>
						{
							this.renderProfilePicture()
						}
						</View>
						<View>
						{
							this.renderUserDetailsSection()
						}
						</View>
					</View>
					<View style = {{padding:width*.02}}>
						<Text style = {{color:'black',fontWeight:'bold'}}>Amol Botare</Text>
					</View>
				</View>	
				<TabView
					style = {{backgroundColor:'white'}}
			        navigationState={this.state}
			        renderScene={SceneMap({
			          first: FirstRoute,
			          second: SecondRoute,
			          third: ThirdRoute,
			        })}
			        renderTabBar={this._renderTabBar}
			        onIndexChange={index => {

			        	this.setState({index:index})

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
		// backgroundColor:'red'
	},
	tabbar: {
	    backgroundColor: 'white',
	  },
	  indicator: {
	    backgroundColor: 'white',
	  },
})