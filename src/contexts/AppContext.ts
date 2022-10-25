import { createContext } from "react";
import { BankAccount } from "../interfaces/BankAccount";

const AppContext = createContext({
  bankAccounts: [] as BankAccount[],
  setBankAccounts: (bankAccounts: BankAccount[]) => {},
});

export default AppContext;
