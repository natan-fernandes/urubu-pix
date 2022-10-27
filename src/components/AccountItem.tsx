import { View, Text, StyleSheet, Image } from 'react-native';
import { formatNumber } from '../components/Utils';
import LogoUrubu from '../../assets/logo.png';

interface AccountItemProps {
  name: string;
  value: number;
}

export const AccountItem = (props: AccountItemProps) => {
  const toReais = (value: number): string => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={LogoUrubu}></Image>
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.description}>Conta corrente</Text>
      </View>
      <Text style={styles.balance}>{formatNumber(props.value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    borderRadius: 50,
    resizeMode: 'contain',
    height: 50,
    width: 50,
    backgroundColor: '#4dff7f',
    marginRight: 20
  },
  name: {
    fontWeight: '500'
  },
  balance: {
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: '#04b8aa',
    marginTop: 15 
  },
  description: {
    color: '#666',
  }
});
