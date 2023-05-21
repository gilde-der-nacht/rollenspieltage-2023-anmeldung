import { Container, isEmptyString } from "./Values";

export type InputProps = {
    label: string;
    hint?: string;
    required?: boolean;
    value: Container<number>;
}

export const NumberInput = (props: InputProps) => {
    return <div class="form-control">
        <label class="label">
            <strong>
                <span class="label-text">{props.label}</span>
            </strong>
        </label>
        <input
            type="text"
            placeholder=""
            class="input input-bordered"
            required={props.required}
            value={props.value.val()}
            onInput={(e) => props.value.setVal(Number.parseInt((e.target as HTMLInputElement).value))} />
        {
            !isEmptyString(props.hint) && (
                <label class="label">
                    <span class="label-text-alt">{props.hint} </span>
                </label>
            )
        }
    </div>
}