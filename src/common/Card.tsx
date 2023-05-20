import { JSXElement } from "solid-js";

type Props = {
    children: JSXElement;
    remove?: () => void;
}

export const Card = (props: Props) => {
    return <div class="card card-compact bg-neutral shadow-xl">
        <div class="card-body">
            <p>{props.children}</p>
            {props.remove !== undefined && (
                <div class="card-actions justify-end mt-4">
                    <button class="btn btn-error btn-sm btn-block" onClick={props.remove}>Entfernen</button>
                </div>
            )}
        </div>
    </div>
}