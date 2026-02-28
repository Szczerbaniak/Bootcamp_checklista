import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const PriorityLevels = {
    Low: "low",
    Medium: "medium",
    High: "high",
  } as const;

  type Priority = (typeof PriorityLevels)[keyof typeof PriorityLevels];

  interface Task {
    content: string;
    priority: Priority;
    done: boolean;
    id: number;
  }

  const [tasks, setTasks] = useState<Task[]>([
    { content: "test", priority: "medium", done: false, id: 1 },
  ]);

  function assignNewIdToTask(currentTasks: Task[]): number {
    return currentTasks.length > 0
      ? Math.max(...currentTasks.map((task) => task.id)) + 1
      : 1;
  }

  function addTask(newTaskContent: string, taskPriority: Priority) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        content: newTaskContent,
        priority: taskPriority,
        done: false,
        id: assignNewIdToTask(prevTasks),
      },
    ]);
  }

  function markTaskComplited(id: number): void {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== id) {
          return task;
        }
        return {
          ...task,
          done: true,
        };
      }),
    );
  }

  function removeTask(id: number): void {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Lista zadań</h1>
          
        </header>
      </div>
    </>
  );
}

export default App;
