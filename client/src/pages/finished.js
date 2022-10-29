import Head from "next/head";
import MainLayout from "../components/layout/main";
import { useState, useEffect } from "react";
import TaskCard from "../components/task-card";

export default function Finished(props) {
  console.log(props.tasks);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(props.tasks || []);
  }, []);
  return (
    <div className="relative h-full w-full  bg-neutral-100">
      <Head>
        <title>Finished Tasks</title>
        <meta name="description" content="Task Manager app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full w-full flex-wrap justify-start overflow-y-auto px-6 pt-8">
        {tasks &&
          tasks.map((object, idx) => <TaskCard {...object} key={idx} />)}
        {!tasks && <p className=" text-red-700">No task found for today.</p>}
      </div>
    </div>
  );
}

Finished.getLayout = (page) => {
  return <MainLayout active={"finished"}>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:4000/api/v1/tasks/finished");
  const data = await res.json();

  return {
    props: data,
  };
}
