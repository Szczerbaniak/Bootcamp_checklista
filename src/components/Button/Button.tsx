import type { MouseEventHandler, ReactElement } from "react";
import stylse from "./Button.module.css";

export function Button({
    children,
    onClickEvent,
}: {
    children: ReactElement | string;
    onClickEvent: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button className={stylse.button} onClick={onClickEvent}>
            {children}
        </button>
    );
}
