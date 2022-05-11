import { onValue, ref } from "firebase/database";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { database } from "../../services/firebase";
import { 
  MainContent,
  Box,
  CreatedName,
  Logo,
  Divider,
  InfoBoxContainer,
  InfoBox,
  Pix
} from "../../styles/pages/Invoices";

export default function InvoicePage({ slug }) {
  const [dataClient, setDataClient] = useState({} as DataClientSingle);



  useEffect(() => {
    const clientRef = ref(database, `invoices/${slug}`);
    onValue(clientRef, (snapshot) => {
      const data = snapshot.val();

      const day = data.maxDueDate.split('-')[2];
      const month = data.maxDueDate.split('-')[1];
      const year = data.maxDueDate.split('-')[0];
      const dateFormmated = day+"/"+month+"/"+year;

      setDataClient({
        client: data.client,
        collaborator: data.collaborator,
        createdAt: data.createdAt,
        maxDueDate: dateFormmated,
        moneyValue: data.moneyValue,
        description: data.description,
      });
    })
  }, [])
  
  return (
    <>
      <Head>
        <title>Fatura da {dataClient.client} | Alpha desenvolvimento</title>
      </Head>

      <MainContent>
        <Box>
          <Logo>
            <Image 
              src="/logo.svg"
              alt="Logo Alpha desenvolvimento"
              width={90}
              height={90}
            />
          </Logo>
          <Divider>
            <img src="/divider.svg" alt="Divisória" />
          </Divider>

          <InfoBoxContainer>
            <InfoBox>
              <h3>Fatura de Alpha Desenvolvimento</h3>
              <span>R$ {dataClient.moneyValue}</span>
              <p>Vencimento máximo sem juros até {dataClient.maxDueDate}</p>

              <h4>Fatura gerada pelo sistema Alpha</h4>

              <Pix>
                46.174.634/0001-61
              </Pix>
              <h5>Chave de pix CNPJ para pagamento</h5>
            </InfoBox>

            <InfoBox>
              <h3>Criado pelo colaborador {dataClient.collaborator}</h3>
              <span>{dataClient.client}</span>
              <p>Data de criação da fatura: {dataClient.createdAt}</p>
              <h4>Descrição: {dataClient.description}</h4>
            </InfoBox>

            <p>E-mail para contato: <br /> gerencia@alphadesenvolvimento.com</p>
            <p>Whatsapp para contato: <br /> (48) 99694-8270</p>
          </InfoBoxContainer>
        </Box>
        <CreatedName>
          <h4>Alpha desenvolvimento</h4>
          <span>46.174.634/0001-61</span>
        </CreatedName>
      </MainContent>
    </>
  )
}

export const getStaticPaths = () => {
  let slug = [];

  const paths = slug;

  return {
    paths: [],
    fallback: 'blocking'
  };
}

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  return {
    props: {
      slug,
    },
    revalidate: 60 * 5 // 5 minutes 
  }
}