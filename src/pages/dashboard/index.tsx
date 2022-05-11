import Head from 'next/head';

import { Header } from '../../components/Header';
import { Title } from '../../components/Form/Title';
import { CardInvoice } from '../../components/CardInvoice';

import { data } from '../../services/data';

import { 
  Main,
  Grid
} from '../../styles/Common';
import { useInvoice } from '../../hooks/useInvoice';
import { removeObject } from '../../services/firebase';

export default function Dashboard() {
  const { invoiceList } = useInvoice();

  function handleRemoveInvoice(id: string) {
    if (window.confirm("Você tem certeza que deseja excluir?")) {
      removeObject(`invoices/${id}`);
    }
  }

  return (
    <>
      <Head>
        <title>Gere uma fatura | Alpha desenvolvimento</title>
      </Head>

      <Header isButtonCreate title="Somos um sistema de geração de faturas rápidas" description="Gerencie suas faturas cadastradas no sistema e encaminhe ela para o seu cliente" />
      
      <Main>
        <fieldset>
          <Title title="Faturas criadas para clientes" />

          <Grid>
            {invoiceList.map(item => (
              <CardInvoice 
                key={item.id}
                id={item.id}
                client={item.client}
                maxDueDate={item.maxDueDate}
                moneyValue={item.moneyValue}
                collaborator={item.collaborator}
                createdAt={item.createdAt}
                onRemoveInvoiceList={handleRemoveInvoice}
              />
            ))}
          </Grid>
        </fieldset>
      </Main>
    </>
  );
}