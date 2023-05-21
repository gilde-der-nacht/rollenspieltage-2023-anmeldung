import { JSXElement } from "solid-js";

type Props = {
    children: JSXElement;
    buttons?: JSXElement;
}

export const Card = (props: Props) => {
    return <div class="card card-compact bg-neutral shadow-xl">
        <div class="card-body">
            {props.children}
            {props.buttons !== undefined && (
                <div class="card-actions justify-end mt-4">
                    {props.buttons}
                </div>
            )}
        </div>
    </div>
}