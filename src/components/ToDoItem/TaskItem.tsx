import styles from "./TaskItem.module.css";
import type { Priority } from "../../types";

export function TaskItem({
    taskContent,
    taskPriority,
    isDone,
}: {
    taskContent: string;
    taskPriority: Priority;
    isDone: boolean;
}) {
    return (
        <li className={styles.task}>
            <p
                className={`${styles[taskPriority]} ${isDone ? styles.done : ""}`}
            >
                {taskContent}
            </p>
        </li>
    );
}
