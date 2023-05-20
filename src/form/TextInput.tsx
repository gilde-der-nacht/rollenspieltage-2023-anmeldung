import { Container, isEmptyString } from "./Values";

export type InputProps = {
    label: string;
    hint?: string;
    required?: boolean;
    value: Container<string>;
}

export const TextInput = (props: InputProps) => {
    return <div class="form-control">
        <label class="label">
            <strong>
                <span class="label-text">{props.label}</span>
                {/* <span class="label-text-alt">Top Right label</span> */}
            </strong>
        </label>
        <input type="text" placeholder="" class="input input-bordered" required={props.required} value={props.value.val()} onInput={(e) => props.value.setVal((e.target as HTMLInputElement).value)} />
        {
            !isEmptyString(props.hint) && (
                <label class="label">
                    <span class="label-text-alt">{props.hint} </span>
                    {/* <span class="label-text-alt">Bottom Right label</span> */}
                </label>
            )
        }
    </div>
}