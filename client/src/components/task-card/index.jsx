import moment from "moment";
import { useRouter } from "next/router";

const completeTheTask = async (e, taskId) => {
  e.preventDefault();
  const res = await fetch(`http://localhost:4000/api/v1/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: true,
      completedAt: Date.now(),
    }),
  });
  const response = await res.json();
  if (res.ok) {
    location.reload();
  }
  console.log(JSON.stringify(response));
};

const undoTheTask = async (e, taskId) => {
  e.preventDefault();
  const res = await fetch(`http://localhost:4000/api/v1/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: false,
      completedAt: null,
    }),
  });
  const response = await res.json();
  if (res.ok) {
    location.reload();
  }
  console.log(JSON.stringify(response));
};
const TaskCard = (props) => {
  console.log(props);
  const { completed, createdAt, _id } = props;
  const createdTime = moment(createdAt).fromNow();
  return (
    <div className="mx-6 mt-4 mb-8 h-48 w-full max-w-xs rounded-md border border-slate-500 bg-white p-2">
      <div className="relative flex h-32 w-full select-none items-center justify-center">
        <p className="text-xl font-semibold">{props.name}</p>
        <p className="absolute left-1 top-1 text-xs">{createdTime}</p>
      </div>
      <div className="flex h-12 w-full font-semibold">
        <button className="editButton mr-1 flex-1">Edit</button>
        <button
          className="doneButton ml-1 flex-1"
          onClick={
            completed
              ? (e) => undoTheTask(e, props._id)
              : (e) => completeTheTask(e, props._id)
          }
        >
          {completed ? "Undo" : "Done"}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
