import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Button } from 'react-native';
import LogoUrubu from '../../assets/logo.png';

export function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={LogoUrubu}></Image>
      <Text style={styles.text}>Urubu Finance</Text>
      <Text style={styles.subtitle}>Organize seu dinheiro e garanta o controle total das suas finanças</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Home')}>
        <Text style={styles.buttonText}>Login</Text>
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
    color: '#666666',
    fontWeight: '400',
    textAlign: 'center'
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
  }
});
