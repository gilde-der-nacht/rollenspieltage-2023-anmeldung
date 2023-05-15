import { JSXElement } from "solid-js";

type Props = {
    onClick: () => void;
    children: JSXElement;
}

export const Button = (props: Props): JSXElement => {
    return <button onClick={props.onClick} class="btn btn-primary">{props.children}</button>
} 