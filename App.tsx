import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContext from './src/contexts/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/pages/Login';
import { Home } from './src/pages/Home';
import { Success } from './src/pages/Success';
import { BankAccount } from './src/interfaces/BankAccount';
import { Register } from './src/pages/Register';
import { User } from './src/types/user';

const Stack = createNativeStackNavigator();
export default function App() {
  const [user, setUser] = useState<User>(undefined);
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);

  useEffect(() => {
    const getBankAccounts = async () => {
      const accounts = await AsyncStorage.getItem('@bankAccounts');
      if (accounts) {
        setBankAccounts(JSON.parse(accounts));
      }
    }
    getBankAccounts();
  }, []);

  if (!bankAccounts) {
    return null;
  }

  return (
    <AppContext.Provider value={{ user, setUser, bankAccounts, setBankAccounts }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Success' component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}
