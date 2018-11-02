import React, { Component } from 'react';

import { Image, Dimensions,Easing, Animated,View } from 'react-native';

import { createBottomTabNavigator,createStackNavigator,createMaterialTopTabNavigator } from 'react-navigation';

import SwipeNavigator from 'react-native-swipe-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// import { createMaterialBottomTabNavigator } from 'react-navigation-tabs';

// import Splash from "./../containers/Splash/Splash";

import Login from "./../containers/Login/LoginContainer";

import SignUp from "./../containers/SignUp/SignUpContainer";

import BicWallet from "./../containers/Home/Home";

import BicCard from "./../containers/Add_Media/Add_Media";

import BicConnect from "./../containers/Search/Search";

import Camera from "./../containers/Home/Camera";

import Direct from "./../containers/Home/Direct";

import Likes from "./../containers/Likes/Likes";

import Stories from "./../components/Instagram_Stories/storiesScreen";

// import HelpDesk from "./../containers/HelpDesk/HelpDesk";

// import SendCard from "./../containers/BicConnect/SendCard/SendCard";

// import ReceiveCard from "./../containers/BicConnect/ReceiveCard/ReceiveCard";

// import UserProfile from "./../containers/Home/UserProfile";

import SettingsScreen from "./../containers/Profile/Profile";

var W = Dimensions.get('window').width;
var H = Dimensions.get('window').height;




export const AppTabNav = createMaterialTopTabNavigator({
    BicWallet: BicWallet,
    BicConnect: BicConnect,
    BicCard: BicCard,
    // HelpDesk:HelpDesk,
    Likes:Likes,
    SettingsScreen: SettingsScreen,
},
{ 
  swipeEnabled:false,
  animationEnabled:false,
  tabBarPosition:'bottom',
  tabBarOptions: {
      indicatorStyle:{backgroundColor:'white'},
      showLabel: false, // hide labels
      showIcon:true,
      activeTintColor: 'tomato', // active icon color
      inactiveTintColor: 'gray',  // inactive icon color
      style: {
          height:W*.15,
          backgroundColor: '#fff', // TabBar background
          //paddingVertical: W*.05,
          borderTopWidth: 2,
          borderTopColor:'rgba(235, 235, 235, 0.8)'
      }
    },
  }
);



export const TabStackNav = createStackNavigator({
    Home:{
      screen: AppTabNav
    },
    Stories:{
      screen:Stories
    }
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX }] };
      },
    }),
  }
)

export const HomeNav = createMaterialTopTabNavigator({
    Camera: {
        screen:Camera,
    },
    Home: {
        screen:AppTabNav,
    },
    Direct: {
        screen:Direct,
    },
},
{ 
  swipeEnabled:false,
  initialRouteName:'Home',
  animationEnabled:false,
  tabBarPosition:'bottom',
  tabBarVisible:false,
  tabBarOptions: {
      indicatorStyle:{backgroundColor:'white'},
      showLabel: false, // hide labels
      showIcon:true,
      activeTintColor: 'tomato', // active icon color
      inactiveTintColor: 'gray',  // inactive icon color
      style: {
          height:0,
          backgroundColor: '#fff', // TabBar background
          //paddingVertical: W*.05,
          borderTopWidth: 2,
          borderTopColor:'rgba(235, 235, 235, 0.8)'
      }
    },
  }
);



