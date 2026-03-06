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
                isEdited: false,
                isDone: false,
                id: assignNewIdToTask(prevTasks),
            },
        ]);
    }

    function reverseTaskEditingStatus(id: number): void {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id !== id) {
                    return task;
                }
                return {
                    ...task,
                    isEdited: !task.isEdited,
                };
            }),
        );
    }

    function editTask(
        id: number,
        newContent: string,
        newPriority: Priority,
    ): void {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id !== id) {
                    return task;
                }
                return {
                    ...task,
                    content: newContent,
                    priority: newPriority,
                    isEdited: false,
                };
            }),
        );
    }

    function markTaskCompleted(id: number): void {
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
                    {tasks.map(({ content, priority, isEdited, isDone, id }) =>
                        !isEdited ? (
                            <TaskItem
                                taskContent={content}
                                taskPriority={priority}
                                isDone={isDone}
                                key={id}
                                editTask={() => reverseTaskEditingStatus(id)}
                                changeTaskToDone={() => markTaskCompleted(id)}
                                deleteTask={() => removeTask(id)}
                            />
                        ) : (
                            <Form
                                onFormSubmit={(
                                    newTaskContent,
                                    newTaskPriority,
                                ) =>
                                    editTask(
                                        id,
                                        newTaskContent,
                                        newTaskPriority,
                                    )
                                }
                                defaultText={content}
                                defaultPriority={priority}
                                className={styles.editTaskForm}
                                key={id}
                            ></Form>
                        ),
                    )}
                </ul>
            </main>
        </div>
    );
}

export default App;
