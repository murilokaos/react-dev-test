import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Button,
  View,
  ButtonGroup
} from 'react-native';
import { Constants } from 'expo'
import { SafeAreaView } from 'react-navigation'
import Colors from '../constants/Colors';
import Layout from '../constants/Layout'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Login',
  };

  render() {
    
    return (
      <SafeAreaView
        style={styles.container}
      >
      <View style={styles.banner}> 
        <Image source={require('../assets/images/navLogo.png')} style={styles.image} />
          <View>
            <Text style={styles.text}>Obrigado por fazer parte da nossa rede de negócios.</Text>
          </View>
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} title="FAZER LOGIN" onPress={() => {  }}></Button>
        <Button style={styles.button} title="CRIAR CONTA" onPress={() => {  }}></Button>
        <ButtonGroup
        selectedBackgroundColor="pink"
        onPress={this.updateIndex}
        selectedIndex={this.state.index}
        buttons={['FAZER LOGIN', 'CRIAR CONTA']}
        containerStyle={{height: 30}} />
      </View>
      <View>
          <Text style={styles.text} color={Colors.fontColor}>Insira aqui seus dados para acessar sua conta</Text>
      </View>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: Colors.headerColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 160,
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttons: {
    flexDirection: 'row',
    backgroundColor: Colors.headerColor,
    justifyContent: 'space-around',
  },
  button: {
    flex: 0.9
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.noticeText,
    textAlign: 'center',
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 50
  },
  
});
