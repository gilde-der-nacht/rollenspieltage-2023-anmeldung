import { JSXElement, createSignal } from "solid-js";
import { Button } from "../common/Button";

type Props = {
    onClick: (val: string) => void;
    children: JSXElement;
}

const [val, setVal] = createSignal("");

export const InputAndButton = (props: Props): JSXElement => {
    const prevent = (e: Event) => {
        e.preventDefault()
        props.onClick(val())
        setVal("")
    }
    return <form onSubmit={prevent}>
        <div class="form-control">
            <div class="input-group">
                <input type="text" class="input input-bordered" value={val()} onInput={(e) => setVal((e.target as HTMLInputElement).value)} />
                <Button onClick={prevent} square={true}>{props.children}</Button>
            </div>
        </div>
    </form>
}