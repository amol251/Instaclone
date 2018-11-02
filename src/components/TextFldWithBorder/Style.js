import { StyleSheet, Dimensions } from "react-native";

var { height,width } = Dimensions.get('window');


export default StyleSheet.create({
    textFld:{
      height: width*.15,
      paddingHorizontal: width*.05
    },
    backgroundView:{
      backgroundColor: 'lightgrey',
      borderWidth: 1,
      borderRadius: width*.02,
      borderColor: 'grey'
    }
})
