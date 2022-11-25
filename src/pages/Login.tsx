import React, { useContext, useState } from 'react';
import { getUser } from '../repository/firebase';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import LogoUrubu from '../../assets/logo.png';
import AppContext from '../contexts/AppContext';

export function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser, setBankAccounts} = useContext(AppContext);

  const handleLogin = async (email: string, password: string) => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    if (trimmedEmail.length === 0 || trimmedPassword.length === 0) {
      setError('Preencha todos os campos.');
      return;
    }
    
    const user = await getUser(email, password);
    if (!user) {
      setError('Email e senha incorretos.');
      return;
    }
    
    setUser(user);
    setBankAccounts(user.bankAccounts);
    navigation.push('Home');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={LogoUrubu}></Image>
      <Text style={styles.text}>Urubu Finance</Text>
      <Text style={styles.subtitle}>Organize seu dinheiro e garanta o controle total das suas finanças</Text>
      <TextInput style={styles.input} onChangeText={setEmail} keyboardType='email-address' placeholder='Email'/>
      <TextInput style={styles.input} onChangeText={setPassword} secureTextEntry={true} placeholder='Senha'/>
      {
        error.length > 0 && <Text style={styles.error}>{error}</Text>
      }
      <TouchableOpacity style={styles.button} onPress={() => handleLogin(email, password)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Register')}>
        <Text style={styles.createAccount}>Criar uma nova conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2f3f0',
  },
  subtitle: {
    marginHorizontal: 80,
    color: '#666',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 30
  },
  image: {
    width: '50%',
    height: '30%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 35,
    color: '#37b4aa',
    fontWeight: '900',
  },
  button: {
    backgroundColor: '#8ccec6',
    marginTop: 110,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700'
  },
  input: {
    backgroundColor: '#8ccec650',
    color: '#222',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    fontSize: 17,
    width: '85%'
  },
  error: {
    marginHorizontal: 80,
    color: '#f00',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 30
  },
  createAccount: {
    color: '#37b4aa',
    marginTop: 20
  }
});
