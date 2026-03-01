import type {
    ComponentPropsWithoutRef,
    MouseEventHandler,
    ReactNode,
} from 'react';
import styles from './Button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
export function Button({ children, onClick }: ButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}
