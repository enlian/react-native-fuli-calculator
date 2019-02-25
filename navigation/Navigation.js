import React from 'react';
import {View} from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Calculator from './../modules/calculator/component/Calculator'

const BottomTabNavigatorConfig = {
  tabBarComponent:function () {
    return <View/>
  },
}

const TabNavigator = createBottomTabNavigator({
  '复利计算器' : Calculator,
},BottomTabNavigatorConfig);

export default createAppContainer(TabNavigator);