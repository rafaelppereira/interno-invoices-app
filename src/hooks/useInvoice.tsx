import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../services/firebase";

export function useInvoice() {
  const [invoiceList, setInvoiceList] = useState([]);

  useEffect(() => {
    const invoiceRef = ref(database, 'invoices/');
    onValue(invoiceRef, (snapshot) => {
      const data = snapshot.val();
      const invoice: InvoiceProps = data;

      const dataClients = Object.entries(invoice).map(([key, value]) => {
        return {
          id: key,
          client: value.client,
          collaborator: value.collaborator,
          createdAt: value.createdAt,
          maxDueDate: value.maxDueDate,
          moneyValue: value.moneyValue,
          description: value.description,
          email: value.email,
          tel: value.tel
        }
      });

      setInvoiceList(dataClients);
    })
  }, [])

  return {
    invoiceList
  }
}