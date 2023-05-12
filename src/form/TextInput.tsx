import { Container } from "./Values";

type Props = {
    label: string;
    hint?: string;
    required?: boolean;
    value: Container<string>;
}

export const TextInput = (props: Props) => {
    return <div class="form-control">
        <label class="label">
            <span class="label-text">{props.label}</span>
            {/* <span class="label-text-alt">Top Right label</span> */}
        </label>
        <input type="text" placeholder="" class="input input-bordered" required={props.required} value={props.value.val} onInput={(e) => props.value.setVal((e.target as HTMLInputElement).value)} />
        {props.hint?.trim().length > 0 && (
            <label class="label">
                <span class="label-text-alt">{props.hint} </span>
                {/* <span class="label-text-alt">Bottom Right label</span> */}
            </label>
        )}
    </div>
}