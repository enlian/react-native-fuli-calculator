'use strict';
import React, {Component, PureComponent} from 'react';
import {Dimensions, Platform, PixelRatio, NetInfo, NativeModules, Text, AsyncStorage} from 'react-native';
import DeviceInfo from 'react-native-device-info';

let Dheight = Dimensions.get('window').height;
let Dwidth = Dimensions.get('window').width;


export const DeviceHeight = Dheight;
export const DeviceWidth = Dwidth;
export const DesignWidth = 750;
export const DesignHeight = 1334;
export const PxScale = DesignWidth / DeviceWidth;
export const PxScaleY = DesignHeight / DeviceHeight;

export function isFullScreenPhone(){
  let per = DeviceHeight/DeviceWidth;
  if(!IsIOS){
    per = getAppWrapperHeight()/DeviceWidth;
  }
  if(Math.round(per*100)/100>=18/9){
    return true;
  }
  return false;
}

export function formatMoney (s) {
  s = s.toString()
  if(/[^0-9\.]/.test(s)) return "0";

  s=s.replace(/^(\d*)$/,"$1.");
  s=(s+"00").replace(/(\d*\.\d\d)\d*/,"$1");
  s=s.replace(".",",");
  let re=/(\d)(\d{3},)/;
  while(re.test(s))
    s=s.replace(re,"$1,$2");
  s=s.replace(/,(\d\d)$/,".$1");

  if(s.length>3 && s.substr(s.length-3,3) === '.00'){
    s = s.substring(0,s.length-3);
  }

  return s.replace(/^\./,"0.")
}

if (!__DEV__) {
  global.console = {
    info: () => {
    },
    log: () => {
    },
    warn: () => {
    },
    debug: () => {
    },
    error: () => {
    },
    alert: () => {
    }
  };
}

//一像素的线
export const px1 = 1 / PixelRatio.get();

export function px (px) {
  return PixelRatio.roundToNearestPixel(2 * px) / PxScale;
}

//比例转化
export function getYAdjustPx (px) {
  return PixelRatio.roundToNearestPixel(px) / PxScaleY;
}

//判断环境
export const IsIOS = Platform.OS === 'ios';

//是否是dev环境
export const IsDev = true;

export function isIphoneX () {
  const model = DeviceInfo.getModel().toUpperCase();
  return model === 'IPHONE X' || model === 'IPHONE XS' || model === 'IPHONE XR' || model === 'IPHONE XS MAX';
}

export function isIphoneXR () {
  const model = DeviceInfo.getModel().toUpperCase();
  return model === 'IPHONE XR';
}

export function ifIphoneX (iphoneXStyle, regularStyle) {

  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function ifIphoneXR (iphoneXRStyle, regularStyle) {

  if (isIphoneXR()) {
    return iphoneXRStyle;
  }
  return regularStyle;
}

export function ifIphoneXRorMax(iphoneXRStyle, regularStyle) {
  const model = DeviceInfo.getModel().toUpperCase();
  if (model === 'IPHONE XR' || model === 'IPHONE XS MAX') {
    return iphoneXRStyle;
  }
  return regularStyle;
}

export const iPhoneXTopOffset = px(23);
export const iPhoneXBottomOffset = px(34);


export function isNetWorkAvailable (netInfo) {
  return !(netInfo && netInfo.type && (netInfo.type.toUpperCase() === 'NONE' || netInfo.type.toUpperCase() === 'UNKNOWN'));
}
