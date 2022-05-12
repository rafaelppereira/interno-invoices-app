import router from "next/router";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, remove, set } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import Cookie from 'js-cookie';
import { addDays } from "date-fns";
import { v4 as createId } from 'uuid';
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

export function signInMethod(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredencial) => {
      const { uid } = userCredencial.user;

      Cookie.set('token', uid, {
        expires: addDays(new Date, 2)
      });

      router.push('/dashboard');
    }).catch(() => {
      toast.error('E-mail e/ou senha incorretas');
    })
}

export function addNewInvoice(
  id: string,
  client: string,
  maxDueDate: string,
  moneyValue: string,
  collaborator: string,
  createdAt: string, 
  description: string,
  email: string,
  tel: string
) {
  
  set(ref(database, 'invoices/' + id), {
    client,
    maxDueDate,
    moneyValue,
    collaborator,
    createdAt,
    description,
    email,
    tel
  });
}

export function addNewClient(name: string) {
  const randomId = createId();

  set(ref(database, 'clients/' + randomId), {
    name
  });
}

export function removeObject(url: string) {
  const reference = ref(database, url);
  remove(reference);

  toast.success("Fatura excluida com sucesso");
}