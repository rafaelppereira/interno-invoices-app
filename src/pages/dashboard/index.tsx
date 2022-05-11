import Head from 'next/head';

import { Header } from '../../components/Header';
import { Title } from '../../components/Form/Title';
import { CardInvoice } from '../../components/CardInvoice';

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

  function handleRedirectToInvoiceLink(tel, client, id, createdAt, email) {
    const firstName = client.split(' ')[0];
    const emailFormatted = email.split('@').join('%40');

    const createdAtFormatted = createdAt.split('/').join('%2F');
    window.open(`https://api.whatsapp.com/send?phone=55${tel}&text=Ol%C3%A1%20${firstName}%2C%20uma%20nova%20fatura%20foi%20gerada%20para%20voc%C3%AA.%0A%0A%E2%9E%A1%EF%B8%8F%20Para%20efetuar%20o%20pagamento%20acesse%20o%20link%3A%20https%3A%2F%2Fapp.alphadesenvolvimento.com%2Finvoices%2F${id}%0A%0AVoc%C3%AA%20pode%20efetuar%20o%20pagamento%20via%20transfer%C3%AAncia%20banc%C3%A1ria%2C%20boleto%20ou%20PIX%0A%0AIdentifica%C3%A7%C3%A3o%20da%20fatura%3A%20${id}%0AData%20de%20cria%C3%A7%C3%A3o%3A%20${createdAtFormatted}%20%0A%0AEncaminhado%20para%20o%20e-mail%3A%20${emailFormatted}%0AEncaminhado%20para%20o%20Whatsapp%3A%20${tel}%0A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0A%F0%9F%93%9E%20(48)%2099694-8270%0A%E2%9C%89%EF%B8%8F%20gerencia%40alphadesenvolvimento.com%0A%F0%9F%8C%BF%20CNPJ%3A%2046.174.634%2F0001-61%0A%0AEssa%20mensagem%20foi%20programada%20pela%20Alpha%20desenvolvimento%2C%20em%20caso%20de%20d%C3%BAvidas%20entre%20em%20contato%20com%20o%20nosso%20surporte%20atrav%C3%A9s%20do%20e-mail%3A%0A%0A%E2%9C%89%EF%B8%8F%20gerencia%40alphadesenvolvimento.com`, '_blank')
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
                email={item.email}
                tel={item.tel}
                onRemoveInvoiceList={handleRemoveInvoice}
                onRedirectToSharedPage={handleRedirectToInvoiceLink}
              />
            ))}
          </Grid>
        </fieldset>
      </Main>
    </>
  );
}