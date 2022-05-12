import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";

import * as Yup from 'yup';
import { Form } from "@unform/web";
import { toast } from "react-toastify";

import { Input } from "../../components/Form/Input";
import { signInMethod } from "../../services/firebase";

import { 
  Container, 
  Box, 
  Title, 
  FormControl, 
  Info
} from "../../styles/pages/Auth";

export default function Auth() {
  const formRefAuth = useRef();

  async function handleSignInWithEmailAndPassword(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('Preencha o campo de e-mail'),
        password: Yup.string()
          .min(4, 'A senha precisa ter no mínimo 3 caracteres')
          .required('Preencha o campo de senha')
      })

      await schema.validate(data, {
        abortEarly: false,
      });

      signInMethod(data.email, data.password);

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          const errors = error.message;
          toast.error(errors);
        })
      }
    }
  }

  return (
    <>
      <Head>
        <title>Entre na nossa plataforma | Alpha desenvolvimento</title>
      </Head>

      <Container>
        <Image
          src="/logo.svg"
          alt="Alpha desenvolvimento"
          width={80}
          height={80}
        />
        <Box>
          <Title>
            <h2>Sistema Alpha</h2>
            <p>Entre com suas credenciais para acessar</p>
          </Title>
          <Form ref={formRefAuth} onSubmit={handleSignInWithEmailAndPassword}>
            <FormControl>
              <Input type="email" name="email" placeholder="Endereço de e-mail" />
              <Input type="password" name="password" placeholder="Digite sua senha" />
              <button type="submit">
                Entrar
              </button>
            </FormControl>
          </Form>
        </Box>
        <Info>
          <h3>Criado e licenciado por <span>Alpha desenvolvimento</span></h3>
          <h3>CNPJ: <span>46.174.634/0001-61</span></h3>
        </Info>
      </Container>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: true,
      }
    }
  }

  return {
    props: {}
  };
}