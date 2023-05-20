import { Show } from "solid-js";
import { Checkbox } from "../form/Checkbox";
import { AllContainers, isEmptyString } from "../form/Values"
import { Day } from "../state"

type Props = {
    day: Day
    containers: AllContainers;
}

export const DayAvailability = (props: Props) => {
    const day = props.day === "Samstag" ? "saturday" : "sunday";

    return <div>
        <label class="label">
            <strong>
                <span class="label-text">Wer ist am {props.day} dabei?</span>
            </strong>
        </label>
        <div class="flex gap-3 flex-wrap">
            <Checkbox label={props.containers.cc.name.val()} isChecked={props.containers.cc[day].val} onClick={() => props.containers.cc[day].setVal(!props.containers.cc[day].val())} />
            <Show when={!isEmptyString(props.containers.f1.name.val())}>
                <Checkbox label={props.containers.f1.name.val()} isChecked={props.containers.f1[day].val} onClick={() => props.containers.f1[day].setVal(!props.containers.f1[day].val())} />
            </Show>
            <Show when={!isEmptyString(props.containers.f2.name.val())}>
                <Checkbox label={props.containers.f2.name.val()} isChecked={props.containers.f2[day].val} onClick={() => props.containers.f2[day].setVal(!props.containers.f2[day].val())} />
            </Show>
        </div>
    </div>
}