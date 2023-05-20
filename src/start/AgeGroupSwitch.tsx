import { For, Show } from "solid-js"
import { Container } from "../form/Values";
import { AgeGroup, ageGroups } from "../state";

type Props = {
    id: string;
    label?: boolean;
    ageGroup: Container<AgeGroup>;
}

export const AgeGroupSwitch = (props: Props) => {
    return <div>
        <Show when={props.label !== false}>
            <label class="label">
                <strong>
                    <span class="label-text">Altersgruppe</span>
                </strong>
            </label>
        </Show>
        <div class="flex gap-3 flex-wrap">
            <For each={ageGroups}>
                {(group) => (
                    <div class={`cursor-pointer badge badge-ghost badge-lg ${props.ageGroup.val() === group ? 'badge-outline' : ''}`} onClick={() => { props.ageGroup.setVal(group) }}>
                        <input type="radio" name={props.id} class="radio" checked={props.ageGroup.val() === group} />
                        <span class="ml-2">{group}</span>
                    </div>
                )}
            </For>
        </div>
    </div >
}