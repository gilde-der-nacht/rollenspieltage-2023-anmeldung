import { DropdownItem, Dropdown } from "../form/Dropdown"
import { ComplexContainer } from "../form/Values";
import { Day, TimeWindow } from "../state"
import { program } from "./DayCalendar";

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

    return <div class="flex gap-3 flex-wrap items-center">
        <Dropdown label={day.val().start} items={startItem()} />
        bis
        <Dropdown label={day.val().end} items={endItem()} />
    </div>

}