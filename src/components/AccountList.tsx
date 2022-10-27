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
      props.bankAccounts.map((account, index) => 
        (
          <>
            <AccountItem key={index} name={account.name} value={account.balance} />
            {
              index < props.bankAccounts.length - 1 && <HorizontalLine />
            }
          </>
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
  }
});
