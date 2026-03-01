import type { ReactElement } from 'react';
import styles from './TaskCounter.module.css';
import type { Task } from '../../types';

export function TaskCounter({ tasks }: { tasks: Task[] }): ReactElement {
    const numberOfTasks: number = tasks.length;
    let tasksText: string;
    if (numberOfTasks === 1) {
        tasksText = 'zadanie';
    } else if (numberOfTasks >= 2 && numberOfTasks <= 4) {
        tasksText = 'zadania';
    } else {
        tasksText = 'zadań';
    }
    return (
        <div className={styles.taskCounter}>
            <h1>Do zrobienia</h1>
            <h2>{`${numberOfTasks} ${tasksText}`}</h2>
        </div>
    );
}
