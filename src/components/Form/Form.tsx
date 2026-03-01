import styles from "./Form.module.css";
import { Button } from "../Button/Button";
import { useState } from "react";
import { Priority } from "../../types";

export function Form({ onFormSubmit }) {
    const [inputValue, setInputValue] = useState<string>("");
    const [priority, setPriority] = useState<Priority>("low");
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onFormSubmit();
            }}
            className={styles.form}
        >
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={styles.input}
                type="text"
            />
            <select name="priority" id="priority">
                
            </select>
        </form>
    );
}
