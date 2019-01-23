import React from 'react';
import { Platform } from 'react-native'
import { createAppContainer, createStackNavigator, StackViewTransitionConfigs  } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Colors from '../constants/Colors';

process.env.REACT_NAV_LOGGING = true;

const IOS_MODAL_ROUTES = ['OptionsScreen'];

let dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  const isModal = IOS_MODAL_ROUTES.some(
    screenName =>
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
  )
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    isModal
  );
};


const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Main: MainTabNavigator,
    },
    {
      headerMode: 'none',
      mode: Platform.OS === 'ios' ? 'modal' : 'card',
      transitionConfig: dynamicModalTransition,
    }
  )
);

export default AppNavigator;