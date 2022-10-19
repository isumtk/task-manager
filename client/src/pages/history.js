import Head from "next/head";
import MainLayout from "../components/layout/main";

export default function History() {
  return (
    <>
      <Head>
        <title>Previous Tasks</title>
        <meta name="description" content="Task Manager app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

History.getLayout = (page) => {
  return <MainLayout active={"history"}>{page}</MainLayout>;
};
