import Head from 'next/head';
import Image from 'next/image';
import { Select } from '../../components/Form/Select';
import { Title } from '../../components/Form/Title';
import { Input } from '../../components/Form/Input';
import { Header, TopBar, ContentHeader, FormControl, Footer } from '../../styles/pages/Dashboard';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Gere uma fatura | Alpha desenvolvimento</title>
      </Head>
      
      <Header>
          <TopBar>
            <div>
              <button type="button">
                <Image 
                  src="/arrow_back.svg"
                  alt="Voltar para o login"
                  width={50}
                  height={50}
                />
              </button>
            </div>
            <div>
              <Image
                src="/logo_white.png"
                alt="Voltar para o login"
                width={50}
                height={50}
              />
            </div>
          </TopBar>
        <ContentHeader>
          <h2>Gere as faturas de forma <br /> rápida por meio do sistema</h2>
          <p>
            O primeiro passo é completar todos os campos com os dados corretos.
          </p>
        </ContentHeader>
      </Header>

      <FormControl>
        <fieldset>
          <Title title="Dados da fatura" />
          <Select name="client" label="Cliente">
            <option disabled selected>Selecionar um cliente</option>
            <option value="1">Qualivida Gestão Saúde</option>
            <option value="2">Jek Móveis</option>
            <option value="3">Home empreendimentos</option>
            <option value="3">Nei Munck</option>
          </Select>
          <Input type="number" name="price" label="Valor da fatura" />
          <Input type="date" name="dueDate" label="Vencimento máximo" />
          <Input type="text" name="id" value="987yda78awd78y78y1d" label="Identificação da fatura" disabled />
        </fieldset>
        <fieldset>
          <Title title="Dados de cadastrante" />
          <Select name="user" label="Colaborador(a)">
            <option disabled selected>Selecionar um cliente</option>
            <option value="1">Rafael dos Santos Pereira</option>
          </Select>
        </fieldset>
      </FormControl>

      <Footer>
        <button type="button">
          Gerar fatura
        </button>
      </Footer>
    </>
  );
}