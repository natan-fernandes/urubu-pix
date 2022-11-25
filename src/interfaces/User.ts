import { BankAccount  } from './BankAccount';

export interface User {
  name: string;
  email: string;
  password: string;
  bankAccounts: BankAccount[];
  setBankAccounts: (bankAccounts: BankAccount[]) => void;
}
  