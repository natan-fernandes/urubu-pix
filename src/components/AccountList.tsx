import { View, Text, StyleSheet } from 'react-native';
import { AccountItem } from '../components/AccountItem';
import { BankAccount } from '../interfaces/BankAccount';
import { HorizontalLine } from './HorizontalLine';

interface AccountListProps {
  bankAccounts: BankAccount[];
}

export const AccountList = (props: AccountListProps) => {

  return (
    <View style={styles.fullWidth}>
    <Text style={styles.bold}>Minhas contas</Text>
    {
      props.bankAccounts.length === 0 && <Text style={styles.noAccounts}>Sem contas cadastradas</Text>
    }
    {
      props.bankAccounts.map((account, index) => 
        (
          <View key={index}>
            <AccountItem name={account.name} value={account.balance} />
            {
              index < props.bankAccounts.length - 1 && <HorizontalLine />
            }
          </View>
        )
      )
    }
  </View>
  );
}

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%'
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 13
  },
  noAccounts: {
    color: '#666'
  }
});
