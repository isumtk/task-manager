import Head from "next/head";
import MainLayout from "../components/layout/main";

export default function Completed() {
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

Completed.getLayout = (page) => {
  return <MainLayout active={"complete"}>{page}</MainLayout>;
};
