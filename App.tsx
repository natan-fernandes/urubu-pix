import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/pages/Login';
import { Home } from './src/pages/Home';
import { Success } from './src/pages/Success';
import AppContext from './src/contexts/AppContext';
import { BankAccount } from './src/interfaces/BankAccount';

const Stack = createNativeStackNavigator();
export default function App() {
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);

  // Mock
  useEffect(() => {
    setBankAccounts([
      {
        name: 'NuConta',
        balance: 3000.50
      },
      {
        name: 'Banco Inter',
        balance: 1000.00
      },
      {
        name: 'iti',
        balance: 5000.00
      }
    ]);
  }, []);

  return (
    <AppContext.Provider value={{ bankAccounts, setBankAccounts }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Success' component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}
