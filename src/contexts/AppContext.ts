import { createContext } from 'react';
import { BankAccount } from '../interfaces/BankAccount';
import { User } from '../types/user';

const AppContext = createContext({
  user: {} as User,
  setUser: (user: User) => {},
  
  bankAccounts: [] as BankAccount[],
  setBankAccounts: (bankAccounts: BankAccount[]) => {},
});

export default AppContext;
