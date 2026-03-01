import styles from './Form.module.css';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { PRIORITIES, type Priority } from '../../types';

type FormProps = {
    onFormSubmit: (inputValue: string, priority: Priority) => void;
};

export function Form({ onFormSubmit }: FormProps) {
    const [inputValue, setInputValue] = useState<string>('');
    const [priority, setPriority] = useState<Priority>('low');
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onFormSubmit(inputValue, priority);
            }}
            className={styles.form}
        >
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={styles.input}
                type='text'
                maxLength={80}
                placeholder='nowe zadanie'
            />
            <select
                name='priority'
                id='priority'
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
                className={`${styles.select} ${styles[priority]}`}
            >
                {PRIORITIES.map((priorityType) => (
                    <option
                        value={priorityType}
                        className={`${styles.option} ${styles[priorityType]}`}
                    >
                        {priorityType}
                    </option>
                ))}
            </select>
            <Button type='submit'>Dodaj</Button>
        </form>
    );
}
