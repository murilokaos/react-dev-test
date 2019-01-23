import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from '../components/ButtonWithMargin';

export default class PermutaScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Permuta',
  };
  
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to home tab"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'transparent',
  },
});
