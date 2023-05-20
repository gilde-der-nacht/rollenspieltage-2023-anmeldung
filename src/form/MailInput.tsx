import { Container, isEmptyString } from "./Values";

type Props = {
    label: string;
    hint?: string;
    required?: boolean;
    value: Container<string>;
}

export const MailInput = (props: Props) => {
    return <div class="form-control">
        <label class="label">
            <strong>
                <span class="label-text">{props.label}</span>
            </strong>
        </label>
        <input type="mail" placeholder="" class="input input-bordered" required={props.required} value={props.value.val()} onInput={(e) => props.value.setVal((e.target as HTMLInputElement).value)} />
        {
            !isEmptyString(props.hint) && (
                <label class="label">
                    <span class="label-text-alt">{props.hint}</span>
                </label>
            )
        }
    </div >
}