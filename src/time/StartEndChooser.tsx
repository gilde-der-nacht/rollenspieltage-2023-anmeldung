import { Show } from "solid-js";
import { DropdownItem, Dropdown } from "../form/Dropdown"
import { ComplexContainer } from "../form/Values";
import { Day, TimeWindow } from "../state"
import { program } from "./DayCalendar";
import { Alert } from "../common/Alert";
import { parseTimeString, rangeIsValid } from "./timeUtil";

type Props = {
    day: Day;
    time: ComplexContainer<TimeWindow>
}

const startTimes = (day: Day): string[] => {
    const { program: p } = program[day]
    return Object.entries(p).map(([time]) => time)
}

const endTimes = (day: Day): string[] => {
    const { program: p, end } = program[day];
    const list = Object.entries(p);
    list.shift();
    const list2 = list.map(([time]) => time);
    return [...list2, String(end)]
}

export const StartEndChooser = (props: Props) => {
    const day = props.time[props.day];

    const startItem = (): DropdownItem[] => startTimes(props.day).map((time): DropdownItem => ({
        label: `${time} Uhr`, onClick: () => day.setVal({
            start: `${time} Uhr`, end: day.val().end
        })
    }))

    const endItem = (): DropdownItem[] => endTimes(props.day).map((time): DropdownItem => ({
        label: `${time} Uhr`, onClick: () => day.setVal({
            end: `${time} Uhr`,
            start: day.val().start
        })
    }))

    const showAlert = (): boolean => {
        try {
            return !rangeIsValid(day.val().start, day.val().end)
        } catch (_) {
            return false;
        }
    }

    return <div>
        <label class="label">
            <strong>
                <span class="label-text">Wann planst du (plant ihr) am {props.day} an- und abzureisen?</span>
            </strong>
        </label>
        <div class="flex gap-3 flex-wrap items-center">
            <Dropdown label={day.val().start} items={startItem()} />
            bis
            <Dropdown label={day.val().end} items={endItem()} />
        </div>
        <Show when={showAlert()}>
            <Alert kind="error" text="Bitte wähle eine Startzeit aus, die vor der Endzeit ist." />
        </Show>
    </div>
}