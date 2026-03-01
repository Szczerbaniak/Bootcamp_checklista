import styles from './TaskItem.module.css';
import type { Priority } from '../../types';
import { Button } from '../Button/Button';

type TaskItemProps = {
    taskContent: string;
    taskPriority: Priority;
    isDone: boolean;
    changeTaskToDone: () => void;
    deleteTask: () => void;
};

export function TaskItem({
    taskContent,
    taskPriority,
    isDone,
    changeTaskToDone,
    deleteTask,
}: TaskItemProps) {
    return (
        <li className={styles.task}>
            <p
                className={`${styles[taskPriority]} ${isDone ? styles.done : ''}`}
            >
                {taskContent}
            </p>
            <Button onClick={changeTaskToDone}>done</Button>
            <Button onClick={deleteTask}>del</Button>
        </li>
    );
}
