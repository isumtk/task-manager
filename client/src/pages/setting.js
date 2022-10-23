import Head from "next/head";
import MainLayout from "../components/layout/main";

export default function Setting() {
  return (
    <>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Task Manager app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

Setting.getLayout = (page) => {
  return <MainLayout active={"setting"}>{page}</MainLayout>;
};
