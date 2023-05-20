import { For, Show } from "solid-js"
import { Container } from "../form/Values";
import { AgeGroup, ageGroups } from "../state";
import { RadioButton } from "../form/RadioButton";

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
                    <RadioButton id={props.id} isChecked={() => props.ageGroup.val() === group} label={group} onClick={() => props.ageGroup.setVal(group)} />
                )}
            </For>
        </div>
    </div >
}