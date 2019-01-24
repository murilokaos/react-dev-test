import React from 'react';
import { Alert, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Colors from '../constants/Colors';
import t from 'tcomb-form-native'; // 0.6.9
import { ScrollView } from 'react-native-gesture-handler';
import stylesheet from '../stylesheet/stylesheet'

const Form = t.form.Form;

const Person = t.struct({
  email: t.String,              
  senha: t.String
});

const options = {
  stylesheet: stylesheet,
  fields: {
    email: {
      label: 'E-mail',
    },
    senha: {
      password:true,
      secureTextEntry:true,
    }
  }
};

export default class LoginScreen extends React.Component {
  state = {
    value: null
  }
  static navigationOptions = {
    title: 'Login',
  };

  onChange(value) {
    this.setState({ value });
  };

  clearForm() {
    this.setState({ value: null });
  };

  notifyLogin(){
    Alert.alert(
      'Login',
      'Login efetuado com sucesso!',
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'OK'},
      ],
      { cancelable: false }
    )
  }

  notifyButton(value){
    Alert.alert(
      'Você Clicou em:',
      value === 'signin' ? 'Fazer Login' : (value === 'signup' ? 'Criar Conta' : 'Esqueci minha senha'),
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'OK'},
      ],
      { cancelable: false }
    )
  }

  onLogin = () => {
    let value = this.refs.form.getValue();
    if (value) {
      this.clearForm();
      this.notifyLogin();
    }
  };

  onPress = (value) => {
    this.notifyButton(value);
  }

  render() {
    
    return (
      <ScrollView>
      <View style={styles.banner}> 
        <Image source={require('../assets/images/navLogo.png')} style={styles.image} />
          <View>
            <Text style={[styles.text, styles.noticeText, styles.bold]}>Obrigado por fazer parte da nossa rede de negócios.</Text>
          </View>
      </View>
      <View style={styles.buttons}>
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this, 'signin')} underlayColor='#00a2a102'>
          <Text style={[styles.buttonText, styles.noticeText]} accessibilityLabel="Clique aqui para fazer login">FAZER LOGIN</Text>
        </TouchableHighlight >
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this, 'signup')} underlayColor='#00a2a102'>
          <Text style={[styles.buttonText, styles.noticeText]} accessibilityLabel="Clique aqui para criar uma conta">CRIAR CONTA</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.form}>
          <Text style={[styles.formText, styles.fontColor, styles.bold]}>Insira aqui seus dados para acessar sua conta</Text>
        <Form ref="form" type={Person} options={options} style={styles.form} value={this.state.value} onChange={this.onChange.bind(this)}/>
        <Text style={[styles.formText, styles.fontColor]} onPress={this.onPress.bind(this, 'lost')}>ESQUECI MINHA SENHA :/</Text>
        <TouchableHighlight style={styles.buttonLogin} onPress={this.onLogin} underlayColor='#99d9f4'>
          <Text style={[styles.buttonText, styles.noticeText]}>Entrar</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
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
    height: 130,
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttons: {
    flexGrow: 0,
    flexDirection: 'row',
    backgroundColor: Colors.headerColor,
  },
  button: {
    flexGrow: 1,
    justifyContent: 'center',
    height: 50,
    backgroundColor: Colors.headerColor,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 70,
    paddingTop: 50
  },
  bold: {
    fontWeight: 'bold',
  },
  noticeText: {
    color: Colors.noticeText,
  },
  fontColor: {
    color: Colors.fontColor,
  },
  formText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 70,
    paddingVertical: 20
  },
  buttonText: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  buttonLogin: {
    height: 50,
    backgroundColor: '#f9a138',
    borderColor: '#f9a138',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  form: {
    paddingHorizontal: 5,
    color: '#CCC'
  },
});
