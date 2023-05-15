import { JSXElement } from "solid-js";

export type ButtonProps = {
    square?: boolean;
    onClick: (e?: Event) => void;
    children: JSXElement;
}

export const Button = (props: ButtonProps): JSXElement => {
    const classes = () => {
        const c = ["btn", "btn-primary"]
        if (props.square) {
            c.push("btn-square")
        }
        return c.join(" ")
    }

    return <button class={classes()} onClick={props.onClick}>{props.children}</button>
} 