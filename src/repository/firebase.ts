import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { User } from '../types/user';
import { UserConverter } from './userConverter';

const firebaseConfig = {
  apiKey: "AIzaSyALxScmc7WzL_MaVBYZxysuUt3GdYIMCtQ",
  authDomain: "urubu-pix.firebaseapp.com",
  projectId: "urubu-pix",
  storageBucket: "urubu-pix.appspot.com",
  messagingSenderId: "665970270443",
  appId: "1:665970270443:web:95743d19b5c83f9f315eae",
  measurementId: "G-B6KV10M98K"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export const addUser = async (user: User) => {
  const users = firestore.collection('users');
  const existingUser = await users.where('email', '==', user.email).get();
  if (existingUser.empty) {
    users.add(user);
    return true;
  }

  return false;
}


export const getUser = async (email: string, password: string): Promise<User | undefined> => {  
  const users = firestore.collection('users').withConverter(UserConverter);
  const existingUser = await users.where('email', '==', email).where('password', '==', password).get();
  if (existingUser.empty) return undefined;
  
  const data = existingUser.docs[0].data();
  return data;
}
