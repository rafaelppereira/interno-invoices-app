import { useEffect, useState } from 'react';

import { onValue, ref } from 'firebase/database';
import { database } from '../services/firebase';

export function useClient() {
  const [clientList, setClientList] = useState([]);
  const [collaboratorList, setCollaboratorList] = useState([]);

  useEffect(() => {
    const clientRef = ref(database, 'clients/');
    onValue(clientRef, (snapshot) => {
      const data = snapshot.val();
      const client: ClientProps = data;

      const dataClients = Object.entries(client).map(([key, value]) => {
        return {
          id: key,
          name: value.name,
          email: value.email,
          tel: value.tel
        }
      });
      setClientList(dataClients);
    })
  }, []);

  useEffect(() => {
    const collaboratorRef = ref(database, 'collaborator/');
    onValue(collaboratorRef, (snapshot) => {
      const data = snapshot.val();
      const collaborator: CollaboratorProps = data;

      const dataCollaborator = Object.entries(collaborator).map(([key, value]) => {
        return {
          id: key,
          name: value.name
        }
      });
      setCollaboratorList(dataCollaborator);
    })
  }, []);

  return {
    clientList,
    collaboratorList
  }
}