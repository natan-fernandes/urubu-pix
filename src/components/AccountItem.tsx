import { View, Text, StyleSheet } from 'react-native';
import { formatNumber } from '../components/Utils';
interface AccountItemProps {
  name: string;
  value: number;
}

export const AccountItem = (props: AccountItemProps) => {
  const toReais = (value: number): string => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <Text>{formatNumber(props.value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
