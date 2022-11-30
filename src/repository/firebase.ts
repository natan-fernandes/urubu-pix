import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { User } from '../interfaces/User';
import { UserConverter } from './userConverter';
import FileSystem from 'expo-file-system';

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

export const addUser = async (user: User): Promise<boolean> => {
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

export const updateUser = async (user: User): Promise<boolean> => {
  const users = firestore.collection('users');
  const existingUser = await users.where('email', '==', user.email).get();
  if (existingUser.empty) return false;

  const doc = existingUser.docs[0];
  users.doc(doc.id).set(user);
  
  return true;
}
