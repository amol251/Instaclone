import React, { Component } from 'react'
// import { createStore, applyMiddleware } from 'redux';
// import { Provider, connect } from 'react-redux';

import { View, StatusBar } from 'react-native'

// import rootReducer from './reducers/index';

// import HomeUI from './containers/Home/Home'

 // import SearchUI from './containers/Search/Search'

// import ProfileUI from './containers/Profile/Profile'

// import LikesUI from './containers/Likes/Likes'

// import AddMediaUI from './containers/Add_Media/Add_Media'

// import AddMediaUI from './components/Gallery/App'

// import LoginUI from './containers/Login/LoginContainer'

// import DragableUI from './components/Draggable_Images/App'
 
// import Direct from './containers/Direct/Direct'

// import SearchPeople from './containers/Home/SearchPeople'

import Message from './containers/Home/Message'

import { AppTabNav,TabStackNav,HomeNav } from './components/Navigator'

// const store = createStore(rootReducer);

// import InputScrollView from 'react-native-input-scroll-view';


export default class App extends Component {
  
  constructor(props){
  	super(props)
  	this.state={
  		text:''
  	}
  }

  render() {
    return (
      <View style = {{flex:1}}>
        <StatusBar hidden = { true } />
		    <HomeNav/>
      </View>
    )
  }
}

// <Provider store={store}>
// </Provider>