import { UserButton } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

const Dashboard: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <UserButton />
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
