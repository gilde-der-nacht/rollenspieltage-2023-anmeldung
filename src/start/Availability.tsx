import { Show } from "solid-js";
import { Container } from "../form/Values"
import { Checkbox } from "../form/Checkbox";

type Props = {
    label?: boolean;
    saturday: Container<boolean>;
    sunday: Container<boolean>;
}

export const Availability = (props: Props) => {
    return <div>
        <Show when={props.label !== false}>
            <label class="label">
                <strong>
                    <span class="label-text">Verfügbarkeit</span>
                </strong>
            </label>
        </Show>
        <div class="flex gap-3 flex-wrap">
            <Checkbox label="Samstag" isChecked={props.saturday.val} onClick={() => { props.saturday.setVal(!props.saturday.val()) }} />
            <Checkbox label="Sonntag" isChecked={props.sunday.val} onClick={() => { props.sunday.setVal(!props.sunday.val()) }} />
        </div>
    </div >
}