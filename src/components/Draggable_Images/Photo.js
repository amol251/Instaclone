// @flow
/* global requestAnimationFrame */

import React, {Component} from 'react';
import { Dimensions,Image,Text,TextInput,TouchableOpacity } from 'react-native';
var {height,width} = Dimensions.get('window') ;
import PropTypes from 'prop-types';
import autobind from 'class-autobind';
import { Icon } from 'react-native-elements'
import ReactNative, {View, Animated, PanResponder, Easing} from 'react-native';
import {ListItem} from 'react-native-elements';
import FlexImage from 'react-native-flex-image';

import getDistance from './helpers/getDistance';
import getScale from './helpers/getScale';
import measureNode from './helpers/measureNode';

import type {Measurement} from './Measurement-type';
import type {Touch} from './Touch-type';

const RESTORE_ANIMATION_DURATION = 200;

type Event = {
  nativeEvent: {
    touches: Array<Touch>;
  };
};

type GestureState = {
  stateID: string;
  dx: number;
  dy: number;
};

type Photo = {
  name: string;
  avatar: {
    uri: string;
  };
  photo: {uri: string};
};

type Props = {
  data: Photo;
  isDragging: boolean;
  onGestureStart: ({photoURI: string; measurement: Measurement}) => void;
  onGestureRelease: () => void;
};

type Context = {
  gesturePosition: Animated.ValueXY;
  scaleValue: Animated.Value;
  getScrollPosition: () => number;
};

export default class PhotoComponent extends Component {
  props: Props;
  context: Context;
  _parent: ?Object;
  _photoComponent: ?Object;
  _gestureHandler: Object;
  _initialTouches: Array<Object>;
  _selectedPhotoMeasurement: Measurement;
  _gestureInProgress: ?string;

  _opacity: Animated.Value;

  static contextTypes = {
    gesturePosition: PropTypes.object,
    scaleValue: PropTypes.object,
    getScrollPosition: PropTypes.func,
  };

  constructor() {
    super(...arguments);
    autobind(this);

    this._generatePanHandlers();
    this._initialTouches = [];
    this._opacity = new Animated.Value(1);
  }

  // @amol 
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

    //@amol
    // <Image
    //   // resizeMode='contain'
    //   style ={{width:width*.1,height:width*.1,borderRadius:width*.1}}
    //   source = {require('./../../assets/water.jpg')}
    //   />

    renderPostFooter=()=>{
      return(
          <View style ={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row'}}>
                  <View style = {{borderRadius:width*.1,margin:width*.02}}>
                    <Icon
                      name='heart-o'
                      type='font-awesome'
                    />
                  </View>
                  <View style = {{borderRadius:width*.1,margin:width*.02}}>
                    <Icon
                      name='comment'
                      type='evilicon'/>
                  </View>
                  <View style = {{borderRadius:width*.1,margin:width*.02}}>
                    <Icon name='send'/>
                  </View>
              </View>
              <View style={{flexDirection:'row'}}>
                <View style = {{width:width*.1,height:width*.1,borderRadius:width*.1,margin:width*.02}}>
                  <Icon
                    name='bookmark-outline'
                    type='material-community'
                    />
                </View>
              </View>
          </View>
      )
  }  

  //@amol  
  renderPostLikeNComments=()=>{
      return(
          <View>
              <View style = {{paddingHorizontal:width*.02}}>
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
              </View>  
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

  render() {
    let {data} = this.props;

    return (
      <View style={{backgroundColor:'white'}} ref={(parentNode) => (this._parent = parentNode)}>
        <View>
          <ListItem
            roundAvatar
            avatar={{uri: data.avatar.uri}}
            title={`${data.name}`}
            subtitle="example of subtitle"
            rightIcon={{name: 'more-vert'}}
          />
        </View>
        <Animated.View
          ref={(node) => (this._photoComponent = node)}
          {...this._gestureHandler.panHandlers}
          style={{opacity: this._opacity}}
        >
          <FlexImage source={{uri: data.photo.uri}} />
        </Animated.View>
        <View>
        {
          this.renderPostFooter()
        }
        {

          this.renderPostLikeNComments()
        }
        </View>
      </View>
    );
  }

  _generatePanHandlers() {
    this._gestureHandler = PanResponder.create({
      onStartShouldSetResponderCapture: () => true,
      onStartShouldSetPanResponderCapture: (event: Event) => {
        return event.nativeEvent.touches.length === 2;
      },
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: (event: Event) => {
        return event.nativeEvent.touches.length === 2;
      },
      onPanResponderGrant: this._startGesture,
      onPanResponderMove: this._onGestureMove,
      onPanResponderRelease: this._onGestureRelease,
      onPanResponderTerminationRequest: () => {
        return this._gestureInProgress == null;
      },
      onPanResponderTerminate: (event, gestureState) => {
        return this._onGestureRelease(event, gestureState);
      },
    });
  }

  async _startGesture(event: Event, gestureState: GestureState) {
    // Sometimes gesture start happens two or more times rapidly.
    if (this._gestureInProgress) {
      return;
    }

    this._gestureInProgress = gestureState.stateID;
    let {data, onGestureStart} = this.props;
    let {gesturePosition, getScrollPosition} = this.context;
    let {touches} = event.nativeEvent;

    this._initialTouches = touches;

    let selectedPhotoMeasurement = await this._measureSelectedPhoto();
    this._selectedPhotoMeasurement = selectedPhotoMeasurement;
    onGestureStart({
      photoURI: data.photo.uri,
      measurement: selectedPhotoMeasurement,
    });

    gesturePosition.setValue({
      x: 0,
      y: 0,
    });

    gesturePosition.setOffset({
      x: 0,
      y: selectedPhotoMeasurement.y - getScrollPosition(),
    });

    Animated.timing(this._opacity, {
      toValue: 0,
      duration: 200,
    }).start();
  }

  _onGestureMove(event: Event, gestureState: GestureState) {
    let {touches} = event.nativeEvent;
    if (!this._gestureInProgress) {
      return;
    }
    if (touches.length < 2) {
      // Trigger a realease
      this._onGestureRelease(event, gestureState);
      return;
    }

    // for moving photo around
    let {gesturePosition, scaleValue} = this.context;
    let {dx, dy} = gestureState;
    gesturePosition.x.setValue(dx);
    gesturePosition.y.setValue(dy);

    // for scaling photo
    let currentDistance = getDistance(touches);
    let initialDistance = getDistance(this._initialTouches);
    let newScale = getScale(currentDistance, initialDistance);
    scaleValue.setValue(newScale);
  }

  _onGestureRelease(event, gestureState: GestureState) {
    if (this._gestureInProgress !== gestureState.stateID) {
      return;
    }

    this._gestureInProgress = null;
    this._initialTouches = [];
    let {onGestureRelease} = this.props;
    let {gesturePosition, scaleValue, getScrollPosition} = this.context;

    // set to initial position and scale
    Animated.parallel([
      Animated.timing(gesturePosition.x, {
        toValue: 0,
        duration: RESTORE_ANIMATION_DURATION,
        easing: Easing.ease,
        // useNativeDriver: true,
      }),
      Animated.timing(gesturePosition.y, {
        toValue: 0,
        duration: RESTORE_ANIMATION_DURATION,
        easing: Easing.ease,
        // useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: RESTORE_ANIMATION_DURATION,
        easing: Easing.ease,
        // useNativeDriver: true,
      }),
    ]).start(() => {
      gesturePosition.setOffset({
        x: 0,
        y:
          (this._selectedPhotoMeasurement &&
            this._selectedPhotoMeasurement.y) ||
          0 - getScrollPosition(),
      });

      this._opacity.setValue(1);

      requestAnimationFrame(() => {
        onGestureRelease();
      });
    });
  }

  async _measureSelectedPhoto() {
    let parent = ReactNative.findNodeHandle(this._parent);
    let photoComponent = ReactNative.findNodeHandle(this._photoComponent);

    let [parentMeasurement, photoMeasurement] = await Promise.all([
      measureNode(parent),
      measureNode(photoComponent),
    ]);

    return {
      x: photoMeasurement.x,
      y: parentMeasurement.y + photoMeasurement.y,
      w: photoMeasurement.w,
      h: photoMeasurement.h,
    };
  }
}
