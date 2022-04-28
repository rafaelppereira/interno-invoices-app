import Head from "next/head";

interface InvoicesProps {
  slug: string;
}

export default function Invoices({ slug }: InvoicesProps) {
  return (
    <>
      <Head>
        <title>Fatura da Qualivida Gestão Saúde - {slug}</title>
      </Head>
    </>
  );
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
      slug
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}