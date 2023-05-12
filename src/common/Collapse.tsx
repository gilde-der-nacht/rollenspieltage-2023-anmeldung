import { JSXElement } from "solid-js";

type Props = {
    title: string;
    children: JSXElement;
}

export const Collapse = (props: Props) => {
    return <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
            {props.title}
        </div>
        <div class="collapse-content">
            {props.children}
        </div>
    </div>
}