import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import Login from "./login/login.component";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Food</title>
        <meta name="description" content="Recipes app from Tsvetomir Tsekov" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Login />
    </>
  );
};

export default Home;
