import Head from "next/head";
import MainLayout from "../components/layout/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Task Manager - Manage your tasks, edit, complete and delete your
          tasks.
        </title>
        <meta name="description" content="Task Manager app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

Home.getLayout = (page) => {
  return <MainLayout active={"incomplete"}>{page}</MainLayout>;
};
