import { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Box } from '../components/Box';
import { HorizontalLine } from '../components/HorizontalLine';
import { AccountItem } from '../components/AccountItem';
import LogoUrubu from '../../assets/logo.png';
import AppContext from '../contexts/AppContext';

export function Home({ navigation }) {
  const { bankAccounts, setBankAccounts } = useContext(AppContext);

  return (
    <LinearGradient style={styles.background} colors={['#37b4aa', '#ddd']} locations={[0.2, 0.2]}>
      <SafeAreaView style={styles.container}>
          <Box>
            <View>
              <Text>Saldo geral</Text>
              <Text>R$ 18.212,23</Text>
            </View>
            <HorizontalLine/>
            <View style={styles.fullWidth}>
              <Text>Minhas contas</Text>
              {
                bankAccounts.map((account, index) => 
                  <AccountItem key={index} name={account.name} value={account.balance}/>
                )
              }
            </View>
          </Box>
      </SafeAreaView>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'line',
  },
  fullWidth: {
    width: '100%'
  }
});
