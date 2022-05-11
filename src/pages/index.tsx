export default function Home() {
  return null;
}

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/dashboard',
      permanent: true,
    }
  }
}
