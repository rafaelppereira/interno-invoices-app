import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { Input } from "../../components/Input";

import { Container, Box, Title, FormControl, Info } from "../../styles/pages/Auth";

export default function Auth() {
  const formRefAuth = useRef();

  const handleFormSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Entre na nossa plataforma | Alpha desenvolvimento</title>
      </Head>

      <Container>
        <Image
          src="/logo.png"
          alt="Alpha desenvolvimento"
          width={82}
          height={82}
        />
        <Box>
          <Title>
            <h2>Sistema Alpha</h2>
            <p>Entre com suas credenciais para acessar</p>
          </Title>
          <FormControl ref={formRefAuth} onSubmit={handleFormSubmit}>
            <Input type="email" name="email" placeholder="Endereço de e-mail" />
            <Input type="password" name="password" placeholder="Digite sua senha" />
            <button type="submit">
              Sign In
            </button>
          </FormControl>
        </Box>
        <Info>
          <h3>Criado e licenciado por <span>Alpha desenvolvimento</span></h3>
          <h3>CNPJ: <span>46.174.634/0001-61</span></h3>
        </Info>
      </Container>
    </>
  );
}