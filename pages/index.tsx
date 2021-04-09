import Layout from "../components/Layout";
import Form from "../components/Form";
import Head from "next/head";
const IndexPage = () => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <Layout title="Home | What's for Dinner?">
      <h1>What do you want to do for dinner tonight?</h1>
      <Form />
    </Layout>
  </>
);

export default IndexPage;
