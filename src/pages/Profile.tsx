import LogoUrubu from '../../assets/logo.png';
import AppContext from '../contexts/AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { updateUser } from '../repository/firebase';

export function Profile ({ navigation }) {
  const { user, setUser } = useContext(AppContext);
  const [error, setError] = useState<string>('');

  const [name, setName] = useState<string>(user.name);

  const handleSave = () => {
    const trimmedName = name.trim();
    if (trimmedName.length === 0) {
      setError('O nome não pode ser vazio');
      return;
    }

    setName(trimmedName);
    const newUser = { ...user, name: trimmedName };
    setUser(newUser);
    updateUser(user);

    navigation.navigate('Home');
  }

  return (
    <LinearGradient style={styles.background} colors={['#37b4aa', '#fff']} locations={[0.25, 0.25]}>
        <SafeAreaView style={styles.container}>
          <View>
            <View style={styles.imageOverlay}>
              <FontAwesome5 style={styles.pencil} name="pencil-alt"/>
            </View>
            <Image style={styles.image} source={LogoUrubu}/>
          </View>
          <Text style={styles.text}>Edite suas informações</Text>
          <View style={styles.flex}>
            <Text style={styles.subtitle}>Nome</Text>
            <TextInput style={styles.name} placeholder='Seu nome' onChangeText={setName} >{name}</TextInput>
          </View>
          {
            error.length > 0 && <Text style={styles.error}>{error}</Text>
          }
          <TouchableOpacity style={styles.button} onPress={() => handleSave()}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <StatusBar style="light" />
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8ccec6',
    marginTop: 'auto',
    marginBottom: 50,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700'
  },
  error: {
    marginHorizontal: 80,
    color: '#f00',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 30
  },
  subtitle: {
    color: '#666',
    fontWeight: '400',
    marginTop: 20,
    marginLeft: 10
  },
  flex: {
    display: 'flex',
    width: '80%'
  },
  text: {
    color: '#666',
    fontWeight: '400',
    marginTop: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 35,
    paddingHorizontal: 10,
    backgroundColor: '#dddddd50',
    borderRadius: 10,
  },
  pencil: {
    fontSize: 50,
    color: '#fff',
  },
  imageOverlay: {
    backgroundColor: '#dddddd50',
    position: "absolute",
    margin: 5,
    borderRadius: 250,
    height: 240,
    width: 240,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    borderRadius: 250,
    resizeMode: 'contain',
    height: 250,
    width: 250,
    backgroundColor: '#4dff7f',
    marginRight: 20,
    borderColor: '#fff',
    borderWidth: 5
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 65,
  }
});
