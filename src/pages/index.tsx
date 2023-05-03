import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import Dashboard from "./dashboard";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Vkusotiiki</title>
        <meta name="description" content="Recipes app from Tsvetomir Tsekov" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Dashboard />
    </>
  );
};

export default Home;
