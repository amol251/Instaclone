import React,{ Component } from 'react'
import { View, ViewPropTypes } from "react-native";
import style from "./styles";
import PropTypes from 'prop-types';

export const ViewLayout = props => {

    const { children, style } = props;

    return (
        <View style={style}>
            {style}
        </View>
    )
}

ViewLayout.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.element.isRequired
}

ViewLayout.defaultProps = {
    style: style.view
}
