import AppContext from '../contexts/AppContext';
import { useContext, useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StyleSheet, Modal, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Box } from '../components/Box';
import { HorizontalLine } from '../components/HorizontalLine';
import { TotalBalance } from '../components/TotalBalance';
import { AccountList } from '../components/AccountList';
import { HomeHeader } from '../components/HomeHeader';
import { AddAccountModal } from '../components/AddAccountModal';
import { updateUser } from '../repository/firebase';
import { User } from '../interfaces/User';

export function Home({ navigation }) {
  const { user, setUser, bankAccounts, setBankAccounts } = useContext(AppContext);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    setModalVisible(false);
    const updatedUser: User = { ...user, bankAccounts: bankAccounts };
    setUser(updatedUser);
    updateUser(updatedUser);
  }, [bankAccounts]);

  return (
      <LinearGradient style={styles.background} colors={['#37b4aa', '#ddd']} locations={[0.2, 0.2]}>
        <SafeAreaView style={styles.container}>
          <Modal transparent={true} visible={isModalVisible} animationType='fade'>
            <View style={styles.modal}>
              <AddAccountModal bankAccounts={bankAccounts} setBankAccounts={setBankAccounts}/>
            </View>
          </Modal>
          <ScrollView style={styles.scrollView}>
            <HomeHeader name={user.name}/>
            <Box>
              <TotalBalance bankAccounts={bankAccounts}/>
              <HorizontalLine/>
              <AccountList bankAccounts={user.bankAccounts}/>
              <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>Adicionar conta bancária</Text>
              </TouchableOpacity>
            </Box>
            <View style={styles.break}/>
            <Box>
              <TouchableOpacity style={styles.button} onPress={() => navigation.push('Success')}>
                <Text style={styles.buttonText}>Teste</Text>
              </TouchableOpacity>
            </Box>
            <View style={styles.break}/>
          </ScrollView>
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
    bottom: 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 65,
  },
  modal: {
    backgroundColor: '#00000050',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  button: {
    backgroundColor: '#8ccec6',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700'
  },
  scrollView: {
    width: '85%'
  },
  break: {
    marginTop: 20
  }
});
