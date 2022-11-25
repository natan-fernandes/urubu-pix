import React, { useState } from 'react';
import AppContext from './src/contexts/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/pages/Login';
import { Home } from './src/pages/Home';
import { Success } from './src/pages/Success';
import { Register } from './src/pages/Register';
import { User } from './src/interfaces/User';
import { BankAccount } from './src/interfaces/BankAccount';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
export default function App() {
  const [user, setUser] = useState<User>(undefined);
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);

  //TODO: Salvar cache no AsyncStorage pra funcionar sem internet

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
