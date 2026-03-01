import { useState } from 'react';
import styles from './App.module.css';
import type { Task, Priority } from './types';
import { TaskCounter } from './components/TaskCounter/TaskCounter';
import { TaskItem } from './components/ToDoItem/TaskItem';
import { Form } from './components/Form/Form';

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

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
                isDone: false,
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
                    isDone: true,
                };
            }),
        );
    }

    function removeTask(id: number): void {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <TaskCounter tasks={tasks} />
            </header>
            <main>
                <Form
                    onFormSubmit={(newTaskContent, newTaskPriority) =>
                        addTask(newTaskContent, newTaskPriority)
                    }
                ></Form>
                <ul className={styles.ul}>
                    {tasks.map(({ content, priority, isDone, id }) => (
                        <TaskItem
                            taskContent={content}
                            taskPriority={priority}
                            isDone={isDone}
                            key={id}
                            changeTaskToDone={() => markTaskComplited(id)}
                            deleteTask={() => removeTask(id)}
                        />
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
