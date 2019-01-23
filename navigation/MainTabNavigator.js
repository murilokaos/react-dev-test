import React from 'react';
import {
  LayoutAnimation,
  View,
  StyleSheet,
  StatusBar,
  Platform,
  Text,
} from 'react-native';
import { SafeAreaView, createMaterialTopTabNavigator } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors'

import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import QRCodeScreen from '../screens/QRCodeScreen'
import PermutaScreen from '../screens/PermutaScreen'
import LoginScreen from '../screens/LoginScreen'


const AppTabs = createMaterialTopTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `tag-outline` : 'tag'
          }
        />
      )
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'magnify' : 'magnify'}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  QRCode: {
    screen: QRCodeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'qrcode-scan' : 'qrcode-scan'}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Permuta: {
    screen: PermutaScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'swap-horizontal' : 'swap-horizontal'}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Login: {
    screen: LoginScreen, 
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'account' : 'account'}
          style={{ color: tintColor }}
        />
      ),
    }
  },
}, {
  initialRouteName: 'Login',
  animationEnabled: true,
  lazy: true,
  swipeEnabled: false,
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    activeTintColor: '#fff',
    inactiveTintColor: '#f2f2f2',
    style: {
      backgroundColor: Colors.headerColor,
    }
  },
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.headerColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})

class TabNavigator extends React.Component {
  static router = AppTabs.router;
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }
  render() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;
    const activeRoute = routes[index];
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" />
        <SafeAreaView
          style={{ flex: 1 }}
          forceInset={{ horizontal: 'always', top: 'always' }}
        >
          <AppTabs navigation={navigation} />
        </SafeAreaView>
      </View>
    );
  }
}

export default TabNavigator;