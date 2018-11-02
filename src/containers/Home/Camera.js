import React,{Component} from 'react';

import { View, StyleSheet, Dimensions,Image } from 'react-native' 

import { RNCamera } from 'react-native-camera';

import { Icon } from 'react-native-elements'

var { height, width } = Dimensions.get('window') 

export default class Camera extends Component {

	constructor(props){
		super(props);
		this.camera='',
		this.state ={

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
      tabBarVisible:true,
      tabBarOnPress: (scene, defaultHandler) => {

        scene.navigation.navigate({
           routeName:'BicWallet',
           
         }
        )
      },
    })

    render() {
        return (
            <View style = {styles.container}>
                <RNCamera
		            ref={ref => {
		              this.camera = 'Camera';
		            }}
		            style = {styles.preview}
		            type={RNCamera.Constants.Type.back}
		            flashMode={RNCamera.Constants.FlashMode.on}
		            permissionDialogTitle={'Permission to use camera'}
		            permissionDialogMessage={'We need your permission to use your camera phone'}
		            // onGoogleVisionBarcodesDetected={({ barcodes }) => {
		            //   console.log(barcodes)
		            // }}
		        />
		        <View style = {{height:height,position:'absolute'}}>
		        </View>
		        <View style = {styles.topBarBtn}>
		        	<View style = {{padding:width*.04,alignSelf:'flex-start'}}>
		        		<Icon
		                    name='ios-settings'
		                    color = 'white'
		                    type='ionicon'
		                    />	
		        	</View>
		        	<View style = {{padding:width*.04,alignSelf:'flex-end'}}>
		        		<Icon
		                    name='long-arrow-right'
		                    type='font-awesome'
		                    color = 'white'
		                    />	
		        	</View>
		        </View>
			      
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  topBarBtn:{
  	position:'absolute',
  	flexDirection:'row',
  	width:width,
  	alignItems:'center',
  	justifyContent:'space-between',
  }
});
