import React,{ Component } from 'react'
import { Text, TouchableOpacity, ViewPropTypes } from "react-native";
import style from "./styles";
import PropTypes from 'prop-types';

export const Button = props => {

    const { text, onPress } = props;

    return (
        <TouchableOpacity style={props.style} onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    style:ViewPropTypes.style,
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string
}

Button.defaultProps = {
    style: style.button,
    text: "BUTTON DEFAULT TEXT"
}
