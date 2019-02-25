'use strict';
import React, {PureComponent} from 'react';
import { Text,StyleSheet } from 'react-native';

export default class TextWrapper extends PureComponent {
  render(){
    let props = {...this.props,style:[style.basic,this.props.style]};

    return(
      <Text
        allowFontScaling={false}
        {...props}
      >{this.props.children}</Text>
    );
  }
}

const style = StyleSheet.create({
  basic:{
    textAlignVertical: 'center',
    includeFontPadding: false,
    backgroundColor:'transparent'
  }
});