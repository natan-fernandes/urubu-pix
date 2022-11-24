import { View, Text, StyleSheet, Image } from 'react-native';
import LogoUrubu from '../../assets/logo.png';

interface HomeHeaderProps {
  name: string;
}

export const HomeHeader = (props: HomeHeaderProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={LogoUrubu}/>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bom dia</Text>
        <Text style={styles.username}>{props.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    borderRadius: 50,
    resizeMode: 'contain',
    height: 60,
    width: 60,
    backgroundColor: '#4dff7f',
    marginRight: 20,
    borderColor: '#fff',
    borderWidth: 3
  },
  header: {
    display: 'flex',
  },
  greeting: {
    color: '#fff',
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25
  }
});
