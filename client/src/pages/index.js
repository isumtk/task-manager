import Head from "next/head";

export default function Home() {
  return (
    <div className=" flex h-screen w-full bg-rose-300">
      <Head>
        <title>
          Task Manager - Manage your tasks, edit, complete and delete your
          tasks.
        </title>
        <meta name="description" content="Task Manager app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
