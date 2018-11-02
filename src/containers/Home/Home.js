import React,{ Component } from 'react';

import { View,Text,Dimensions,Image,TextInput,TouchableOpacity,ScrollView,Easing, Animated } from 'react-native'

var { height,width } = Dimensions.get('window')

// import { createStackNavigator } from 'react-navigation';

import Stories from './../../components/Instagram_Stories/app'

import Cards from './../../components/Draggable_Images/App'

import { Icon } from 'react-native-elements'

import { StackActions } from 'react-navigation';

import Camera from "./Camera";

import Direct from "./Direct";


class HomeUI extends Component {

    static navigationOptions =({navigation})=>({
        // swipeEnabled: true,
        // animationEnabled:false,
        tabBarIcon: ({ focused,tintColor }) => (focused == true ?
        <Image
          source={require('./../../assets/selected_bic_wallet.png')}
          style={{width:width*.07, height: width*.07}}
        />
        :
        <Image
          source={require('./../../assets/unselected_bic_wallet.png')}
          style={{width:width*.07, height: width*.07}}
        />
      ),
      tabBarVisible:true,
      tabBarOnPress: (scene, defaultHandler) => {

        scene.navigation.navigate({
           routeName:'BicWallet',
           
         }
        )
      },
    })

    renderPostHeader=()=>{
        return(
            <View style ={{flexDirection:'row',alignItems:'center'}}>
                <View style = {{width:width*.1,height:width*.1,borderRadius:width*.1,margin:width*.02}}>
                    <Image
                    // resizeMode='contain'
                    style ={{width:width*.1,height:width*.1,borderRadius:width*.1}}
                    source = {require('./../../assets/water.jpg')}
                    />
                </View>
                <View style = {{alignItems:'flex-start',backgroundColor:'blue',width:width*.77}}>
                    <Text>amol</Text>
                </View>
                <View style = {{paddingHorizontal:width*.03}}>
                    <Image
                    // resizeMode='contain'
                    style ={{width:width*.01,height:width*.045}}
                    source = {require('./../../assets/menu_btn.png')}
                    />
                </View>
            </View>
        )
    }

    renderPostContent=()=>{
        return(
            <View>
                <Image
                // resizeMode='contain'
                style ={{width:width,height:width}}
                source = {require('./../../assets/water.jpg')}
                />
            </View>
        )
    }

    renderPostFooter=()=>{
        return(
            <View style ={{backgroundColor:'white', flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <View style = {{width:width*.1,height:width*.1,borderRadius:width*.1,margin:width*.02}}>
                        <Image
                        // resizeMode='contain'
                        style ={{width:width*.1,height:width*.1,borderRadius:width*.1}}
                        source = {require('./../../assets/water.jpg')}
                        />
                    </View>
                    <View style = {{width:width*.1,height:width*.1,borderRadius:width*.1,margin:width*.02}}>
                        <Image
                        // resizeMode='contain'
                        style ={{width:width*.1,height:width*.1,borderRadius:width*.1}}
                        source = {require('./../../assets/water.jpg')}
                        />
                    </View>
                    <View style = {{width:width*.1,height:width*.1,borderRadius:width*.1,margin:width*.02}}>
                        <Image
                        // resizeMode='contain'
                        style ={{width:width*.1,height:width*.1,borderRadius:width*.1}}
                        source = {require('./../../assets/water.jpg')}
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style = {{width:width*.1,height:width*.1,borderRadius:width*.1,margin:width*.02}}>
                        <Image
                        // resizeMode='contain'
                        style ={{width:width*.1,height:width*.1,borderRadius:width*.1}}
                        source = {require('./../../assets/water.jpg')}
                        />
                    </View>
                    <View style = {{width:width*.1,height:width*.1,borderRadius:width*.1,margin:width*.02}}>
                        <Image
                        // resizeMode='contain'
                        style ={{width:width*.1,height:width*.1,borderRadius:width*.1}}
                        source = {require('./../../assets/water.jpg')}
                        />
                    </View>
                </View>
            </View>
        )
    }

    renderPostLikeNComments=()=>{
        return(
            <View>
                <View>
                    <Text>100 likes</Text>
                </View>
                <View>
                    <Text numberOfLines = {1} >amol<Text>sd hasdhkas hdksah dsajhdksahdhsakdh sahd jashd jhaskj dhsajh dkasjhdsajhkd hajh dsah dkajsh dkjsah</Text>more</Text>
                    <TouchableOpacity>
                        <Text>Show more</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress = {this.onSeeComments}>
                    <Text>View all <Text>5</Text> comments</Text>
                </TouchableOpacity>
                <View style = {{flexDirection:'row'}}>
                    <View style = {{width:width*.1,height:width*.1,borderRadius:width*.1,margin:width*.02}}>
                        <Image
                        // resizeMode='contain'
                        style ={{width:width*.1,height:width*.1,borderRadius:width*.1}}
                        source = {require('./../../assets/water.jpg')}
                        />
                    </View>
                    <TextInput
                    underlineColorAndroid='transparent'
                    style={{width:width*.8,height:height*.07}}
                    placeholder="Add a comment..."
                    />
                </View>
            </View>
        )
    }

    onSeeComments=()=>{

    }


    renderHeader=()=>{
        return(
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style = {{padding:width*.04}}>
                <Icon
                    name='camera'
                    type='evilicon'
                    />  
            </View>
            <Text>Instagram</Text>
        </View>
        )
    }
    
    render() {
        return (
            <ScrollView
            onScroll={(event)=>{
                console.log('swipe scroll check event')  
            }}
            // onScrollAnimationEnd={(event)=>{
            //     console.log('swipe scroll check event',event)  
            // }}
            >   
                {this.renderHeader()}
                <Stories/>
                <Cards/>
            </ScrollView>
        );
    }
}

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    static navigationOptions =({navigation})=>({
        // swipeEnabled: true,
        // animationEnabled:false,
        tabBarIcon: ({ focused,tintColor }) => (focused == true ?
        <Image
          source={require('./../../assets/selected_bic_wallet.png')}
          style={{width:width*.07, height: width*.07}}
        />
        :
        <Image
          source={require('./../../assets/unselected_bic_wallet.png')}
          style={{width:width*.07, height: width*.07}}
        />
      ),
      // tabBarVisible:(navigation.getParams('tabVisible') == null ? true : navigation.getParams('tabVisible') ),
      tabBarOnPress: (scene, defaultHandler) => {

        scene.navigation.navigate({
           routeName:'BicWallet',
           
         }
        )
      },
      gesturesEnabled: true,
    })

    render(){
        return(
            <HomeUI/>
        )
    }

}






