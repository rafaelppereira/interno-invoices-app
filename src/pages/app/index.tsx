import { GetServerSideProps } from "next";

export default function App() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const authenticated = false;

  if (authenticated == false) {
    return {
      redirect: {
        destination: '/app/auth',
        permanent: true,
      }
    }
  } else {
    return {
      redirect: {
        destination: '/app/dashboard',
        permanent: true,
      }
    }
  }

}