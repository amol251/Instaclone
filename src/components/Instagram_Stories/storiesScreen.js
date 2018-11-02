
import React,{ Component } from 'react'

import {View,StyleSheet,Dimensions} from 'react-native'
import Stories from './stories';
import store from './store';

var {height,width} = Dimensions.get('window')

export default class extends React.Component {

	
	render(){
		return(
		<View style={[
			styles.carouselWrap,
			//store.offset,
			(store.carouselOpen ? styles.open : styles.closed)
		]}>
			<Stories />
		</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	carouselWrap: {
		overflow: 'hidden',
		//position: 'absolute',
	},
	closed: {
		width: 0,
		height: 0,
	},
	open: {
		width, height,
		top: 0,
		left: 0,
	},
	btn: {
		width: 40,
		height: 40,
		borderRadius: 40/2,
		backgroundColor: 'black',
	},
});
