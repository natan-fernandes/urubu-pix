//import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Box } from '../components/Box';
import { BankAccount } from '../interfaces/BankAccount';
import { HorizontalLine } from './HorizontalLine';

interface AddAccountModalProps {
  bankAccounts: BankAccount[];
  setBankAccounts: (bankAccounts: BankAccount[]) => void;
}

export const AddAccountModal = (props: AddAccountModalProps) => {
  const [accountName, setAccountName] = useState<string>('');
  const [balance, setBalance] = useState<string>('');

  const handleSubmit = async () => {
    const newBankAccount: BankAccount = {
      name: accountName,
      balance: balance.length === 0 ? 0 : parseFloat(balance)
    }

    const newBankAccounts = [...props.bankAccounts, newBankAccount];
    props.setBankAccounts(newBankAccounts);

    // await AsyncStorage.setItem('@bankAccounts', JSON.stringify(newBankAccounts));
    setAccountName('');
    setBalance('');
  }

  return (
    <View style={styles.container}>
      <Box>
          <View style={styles.header}>
            <Text style={styles.title}>Adicionar conta bancária</Text>
          </View>
          <HorizontalLine/>
          <View style={styles.body}>
            <TextInput style={styles.input} placeholder='Nome' 
              onChangeText={setAccountName} value={accountName} />
            <TextInput style={styles.input} placeholder='Saldo' keyboardType='numeric' 
              onChangeText={setBalance} value={balance} />
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  body: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#8ccec650',
    color: '#222',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    fontSize: 17,
    width: '100%'
  },
  button: {
    backgroundColor: '#8ccec6',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 30,
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700'
  }
});