import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import LogoUrubu from '../../assets/logo.png';

export function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={LogoUrubu}></Image>
      <Text style={styles.text}>Urubu do PIX</Text>
      <TouchableOpacity style={styles.button}>
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
    marginTop: 50,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700'
  }
});
