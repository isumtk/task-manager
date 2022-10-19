import Head from "next/head";
import MainLayout from "../components/layout/main";
import TaskCard from "../components/task-card";

export default function Home() {
  return (
    <div className="relative h-full w-full  bg-indigo-50">
      <Head>
        <title>
          Task Manager - Manage your tasks, edit, complete and delete your
          tasks.
        </title>
        <meta name="description" content="Task Manager app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-1/5 w-full p-8">
        <form className="mx-auto flex w-4/5 flex-col">
          <input />
          <input />
          <input />
        </form>
      </div>
      <div className="flex h-4/5 w-full flex-wrap justify-center overflow-y-auto bg-graph pt-8">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

Home.getLayout = (page) => {
  return <MainLayout active={"tasks"}>{page}</MainLayout>;
};
