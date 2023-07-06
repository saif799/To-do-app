import { useState } from "react";
import "./App.css";
import { Project } from "./Project";
import { Tasks } from "./tasks";
import { NavBar } from "./NavBar";
import { AddBtn } from "./AddBtn";

function App() {
  const [currentP, setCurrentP] = useState(0);
  const [taskId, setTaskId] = useState(9);
  const [ProjectIds, setProjectIds] = useState(4);
  const [inputOcupied, setOcupied] = useState(false);
  const [projects, setProjects] = useState({
    proId: [
      {
        id: 0,
        name: "first one ",
      },
      {
        id: 1,
        name: "second one ",
      },
      {
        id: 2,
        name: "third one ",
      },
      {
        id: 3,
        name: "fourth one ",
      },
    ],
    tasks: [
      {
        name: "second test i guess ",
        done: false,
        id: 1,
        taskId: 0,
      },
      {
        name: "0 test i guess ",
        done: false,
        id: 0,
        taskId: 1,
      },
      {
        name: "2 test i guess ",
        done: false,
        id: 2,
        taskId: 2,
      },
      {
        name: "fmjsdmf test i guess ",
        done: false,
        id: 2,
        taskId: 3,
      },
      {
        name: "3 test i guess ",
        done: false,
        id: 3,
        taskId: 4,
      },
      {
        name: "messi is the goat ",
        done: false,
        id: 3,
        taskId: 5,
      },
      {
        name: "random test ",
        done: false,
        id: 3,
        taskId: 6,
      },
      {
        name: "random  ",
        done: false,
        id: 3,
        taskId: 7,
      },
      {
        name: "random test ",
        done: false,
        id: 3,
        taskId: 8,
      },
    ],
  });

  function handleOcupie() {
    setOcupied(!inputOcupied);
  }

  function handleClick(id) {
    console.log(currentP);
    setCurrentP(id);
  }

  function handleChange(newValue, id, type) {
    const edited = projects[type].map((p) => {
      if (p.id === id) return { ...p, name: newValue };
      return p;
    });

    setProjects({
      ...projects,
      [type]: edited,
    });
  }

  function handleIsDone(id) {
    const newTasks = projects.tasks.map((t) => {
      if (t.taskId === id) return { ...t, done: true };
      return t;
    });
    setProjects({
      ...projects,
      tasks: newTasks,
    });
  }

  function deleteProject(id) {
    const differentid = projects.proId.find((e) => e.id !== currentP);
    if (differentid) setCurrentP(differentid.id);

    const editedProjects = projects.proId.filter((p) => p.id !== id);
    const editedTasks = projects.tasks.filter((p) => p.id !== id);
    setProjects({
      ...projects,
      proId: editedProjects,
      tasks: editedTasks,
    });
  }
  function deleteTask(id) {
    const theTask = projects.tasks.find((e) => e.taskId === id);
    console.log("iam the deleted one ", theTask.id);
    const edited = projects.tasks.filter((p) => p.taskId !== theTask.taskId);
    setProjects({
      ...projects,
      tasks: edited,
    });
  }

  function handleAddProject(name) {
    const newProject = {
      id: ProjectIds,
      name: name,
    };
    const newproId = [...projects.proId, newProject];
    setProjects({ ...projects, proId: newproId });
    setCurrentP(ProjectIds);
    setProjectIds(ProjectIds + 1);
  }

  function handleAddTask(value) {
    const newTask = {
      name: value,
      done: false,
      id: currentP,
      taskId: taskId,
    };
    const tasks = [...projects.tasks, newTask];
    setProjects({ ...projects, tasks: tasks });
    setTaskId(taskId + 1);
  }

  return (
    <>
      <div className="appContainer">
        <NavBar />
        <main>
          <div className="left-container">
            <div>
              <h1 className="title">Projects</h1>
              <ul>
                {projects.proId.map((e) => (
                  <Project
                    isOcupied={inputOcupied}
                    handleOcupie={handleOcupie}
                    handleClick={handleClick}
                    handleDelete={deleteProject}
                    handleChange={handleChange}
                    isactive={currentP}
                    key={e.id}
                    props={e}
                  />
                ))}
              </ul>
            </div>
            <AddBtn
              props={{ handleOcupie, inputOcupied }}
              handleAdd={handleAddProject}
            >
              Add a new project
            </AddBtn>
          </div>

          <div className="right-container">
            <div className="grid">
              {projects.tasks.map((t) => {
                if (t.id === currentP)
                  return (
                    <Tasks
                      handleDelete={deleteTask}
                      key={t.taskId}
                      handleIsDone={handleIsDone}
                      props={t}
                    />
                  );
              })}
            </div>
            <AddBtn
              props={{ handleOcupie, inputOcupied }}
              handleAdd={handleAddTask}
            >
              Add a new Task
            </AddBtn>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
