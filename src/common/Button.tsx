import { JSXElement } from "solid-js";

export type ButtonProps = {
    square?: boolean;
    onClick: (e?: Event) => void;
    children: JSXElement;
    secondary?: boolean;
}

export const Button = (props: ButtonProps): JSXElement => {
    const classes = () => {
        const c = ["btn", "btn-primary"]
        if (props.square) {
            c.push("btn-square")
        }
        if (props.secondary) {
            c.push("btn-outline");
        }
        return c.join(" ")
    }

    return <button class={classes()} onClick={props.onClick}>{props.children}</button>
} 