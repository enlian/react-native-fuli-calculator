'use strict';
import React, {PureComponent} from 'react';
import { Platform, StyleSheet, View } from 'react-native'
import Text from './TextWrapper'
import {px,DeviceWidth,px1,ifIphoneX,iPhoneXTopOffset} from './../utils/CommonUtils'


export default class Header extends PureComponent {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height: px(50),
    backgroundColor:'#fff',
    justifyContent:'flex-end',
    width:DeviceWidth,
    ...Platform.select({
      ios:ifIphoneX({
        height: px(50)+iPhoneXTopOffset,
      }, {
        height:px(50)
      })
    }),
  },
  textStyle:{
    fontSize:px(16),
    color:'#666',
    textAlign:'center',
    fontWeight:'500'
  }
});