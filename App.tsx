import React, { useState } from 'react';
import AppContext from './src/contexts/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/pages/Login';
import { Home } from './src/pages/Home';
import { Register } from './src/pages/Register';
import { User } from './src/interfaces/User';
import { BankAccount } from './src/interfaces/BankAccount';
import { Profile } from './src/pages/Profile';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
export default function App() {
  const [user, setUser] = useState<User>(undefined);
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);

  /*
    TODO: Adicionar opção de tirar foto ou enviar foto para o perfil.
    TODO: Adicionar validação de campos.
    TODO: Salvar cache no AsyncStorage pra funcionar sem internet.
    TODO: Adicionar global styles p/ usar sempre as mesmas cores.
  */
  return (
    <AppContext.Provider value={{ user, setUser, bankAccounts, setBankAccounts }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}
