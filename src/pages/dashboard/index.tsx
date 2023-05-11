import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import styles from "./dashboard.module.css";

const Dashboard: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className={styles.wrapper}>
        <Navbar />
        <div>content</div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
