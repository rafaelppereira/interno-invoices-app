export default function Home() {
  return null;
}

export const getServerSideProps = async ({req}) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/auth',
        permanent: true
      }
    }
  } else {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: true
      }
    }
  }

  return {}
}
