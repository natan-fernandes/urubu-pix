import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import LogoUrubu from '../../assets/logo.png';

export function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={LogoUrubu}></Image>
      <Text style={styles.text}>Preencha com seus dados</Text>
      <TextInput style={styles.input} keyboardType='numeric' placeholder='Número do cartão' />
      <TextInput style={styles.input} keyboardType='numeric' placeholder='CVV' />
      <TextInput style={styles.input} keyboardType='numeric' placeholder='Senha do cartão' />
      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Success')}>
        <Text style={styles.buttonText}>Receber PIX</Text>
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
  image: {
    width: '50%',
    height: '20%',
    resizeMode: 'contain',
  },
  text: {
    marginTop: 20,
    fontSize: 30,
    color: '#37b4aa',
    fontWeight: '900',
  },
  button: {
    backgroundColor: '#8ccec6',
    marginTop: 50,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700'
  },
  input: {
    marginTop: 20,
    borderRadius: 35,
    fontSize: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '80%',
  },
});
