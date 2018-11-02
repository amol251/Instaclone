import React,{ Component } from 'react';
import { View, TextInput, ViewPropTypes } from "react-native";
import PropTypes from 'prop-types';
import styles from "./Style";


export const TextFld = props => {

    const { placeholder, onChange, style, keyboardType } = props;

    return (
      <View style = {style}>
        <TextInput
          underlineColorAndroid = 'transparent'
          style = {styles.textFld}
          placeholder = {placeholder}
          keyboardType = {keyboardType}
          returnKeyType = "done"
          onChangeText = {(text) => onChange(text)}
          />
      </View>
    )
}

TextFld.propTypes = {
    style: ViewPropTypes.style,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    keyboardType:PropTypes.string
}

TextFld.defaultProps = {
    style: styles.backgroundView,
    placeholder: "Please enter text",
    keyboardType:'default'
}
