import { JSXElement } from "solid-js"

type Props = {
    title: string;
    description?: string;
    children?: JSXElement;
}

export const Heading = (props: Props) => {
    return <div>
        <h3 class="text-2xl font-bold">{props.title}</h3>
        {props.description !== undefined && (
            <p>{props.description}</p>
        )}
        {props.children}
    </div>
}