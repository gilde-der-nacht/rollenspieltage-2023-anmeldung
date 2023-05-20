import { Show } from "solid-js";
import { Container } from "../form/Values"

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
            <div class={`cursor-pointer badge badge-ghost badge-lg ${props.saturday.val() ? 'badge-outline' : ''}`} onClick={() => { props.saturday.setVal(!props.saturday.val()) }}>
                <input type="checkbox" checked={props.saturday.val()} class="checkbox checkbox-xs" />
                <span class="ml-2">Samstag</span>
            </div>
            <div class={`cursor-pointer badge badge-ghost badge-lg ${props.sunday.val() ? 'badge-outline' : ''}`} onClick={() => { props.sunday.setVal(!props.sunday.val()) }}>
                <input type="checkbox" checked={props.sunday.val()} class="checkbox checkbox-xs" />
                <span class="ml-2">Sonntag</span>
            </div>
        </div>
    </div >
}