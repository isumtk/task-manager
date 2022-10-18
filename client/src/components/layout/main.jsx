import Link from "next/link";
import TaskCard from "../task-card";

const MainLayout = (props) => {
  const { active } = props;
  return (
    <main className="flex h-screen w-full bg-white">
      <div className=" h-full w-full max-w-sm bg-inherit">
        <section className="flex h-20 w-full select-none items-center border-b border-b-slate-200 px-8">
          <h1 className="text-3xl font-black tracking-wide">Task Manager</h1>
        </section>
        <section className=" pl-8">
          <Link href={"/"}>
            <div
              className={
                active === "incomplete"
                  ? "navbar-option-body-active"
                  : "navbar-option-body"
              }
            >
              <p className="text-lg font-bold capitalize">in complete</p>
            </div>
          </Link>
          <Link href={"/done"}>
            <div
              className={
                active === "complete"
                  ? "navbar-option-body-active"
                  : "navbar-option-body"
              }
            >
              <p className="text-lg font-bold capitalize">Done</p>
            </div>
          </Link>
        </section>
      </div>
      <div className="h-full w-full overflow-y-auto">
        <div className="absolute right-8 bottom-8 z-50 h-16 w-16 rounded-full bg-indigo-700"></div>
        <section className="h-full w-full flex-grow bg-white">
          <section className="flex h-full w-full flex-wrap items-center justify-center overflow-y-auto bg-graph">
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
          </section>
        </section>
      </div>
    </main>
  );
};

export default MainLayout;
