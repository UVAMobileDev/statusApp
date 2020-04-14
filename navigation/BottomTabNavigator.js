import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenOne from '../Screens/ScreenOne';
import ScreenTwo from '../Screens/ScreenTwo';
import ScreenThree from '../Screens/ScreenThree';


const BottomTabNavigator = createBottomTabNavigator({
  Home: ScreenOne,
  Information: ScreenTwo,
  Map: ScreenThree
});

export default BottomTabNavigator;
