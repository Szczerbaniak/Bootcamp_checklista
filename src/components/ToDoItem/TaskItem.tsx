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
        <li className={`${styles.task} ${styles[taskPriority]}`}>
            <p className={`${styles.p} ${isDone ? styles.done : ''}`}>
                {taskContent}
            </p>
            {!isDone ? <Button onClick={changeTaskToDone}>Zrobione</Button> : ''}
            <Button onClick={deleteTask}>Usuń</Button>
        </li>
    );
}
