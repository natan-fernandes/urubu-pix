import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native';
import CheckAnimation from '../animations/check.json'

export function Success({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.success}>SUCESSO!</Text>
      <Lottie style={styles.check} source={CheckAnimation} autoPlay loop={false} />
      <Text style={styles.title}>TRANSFERÊNCIA REALIZADA</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Login')}>
        <Text>Confirmar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#37b4aa'
  },
  title: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 80,
    marginVertical: 20
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 80,
    color: '#37b4aa'
  },
  success: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
  },
  check: {
    height: 300,
  }
});
