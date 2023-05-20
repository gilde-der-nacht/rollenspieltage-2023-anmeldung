import { For } from "solid-js";
import { Day, TimeWindow } from "../state";
import { ComplexContainer } from "../form/Values";
import { parseTimeString } from "./timeUtil";

type Props = {
    day: Day;
    time: ComplexContainer<TimeWindow>;
}

export const lunch = "Mittagessen" as const;
export const dinner = "Nachtessen" as const;

export const program = {
    Samstag: {
        start: 10, end: 24, program: {
            10: "Block", 12: lunch, 13: "Block", 15: "Block", 17: "Block", 19: dinner, 20: "Block", 22: "Block"
        }
    },
    Sonntag: {
        start: 10, end: 19, program: {
            10: "Block", 12: lunch, 13: "Block", 15: "Block", 17: "Block"
        }
    },
}

const prettyfy = (t: string | undefined): string => {
    if (t === undefined) {
        return ""
    }
    if (t === "Block") {
        return "Start Spielblock"
    }
    return t
}

const isEating = (t: string | undefined): boolean => t === lunch || t === dinner;

const isVisiting = (h: number, day: Day, timeWindow: ComplexContainer<TimeWindow>): boolean => {
    const { start, end } = timeWindow[day].val();
    try {
        return parseTimeString(start) <= h && parseTimeString(end) > h;
    } catch (error) {
        return false;
    }
}

export const DayCalendar = (props: Props) => {
    const headerFooter = () => (
        <tr>
            <th>Startzeit</th>
            <th></th>
            <th>Programm</th>
            <th>Bemerkung</th>
        </tr>);

    const dayRange = () => {
        const { start, end } = program[props.day];
        return [...Array(end - start).keys()].map(n => n + start);
    }

    const dayProgram = () => program[props.day].program;

    return <div>
        <div class="overflow-x-auto">
            <table class="table table-compact w-full">
                <thead>
                    {headerFooter()}
                </thead>
                <tbody>
                    <For each={dayRange()}>
                        {
                            (h) => (
                                <tr class={isEating(dayProgram()[h]) ? "active" : "hover"}>
                                    <th>{h} Uhr</th>
                                    <td>{isVisiting(h, props.day, props.time) ? (
                                        <div class="indicator pb-3" title="Deine/Eure Anwesenheit">
                                            <span class="indicator-item indicator-middle indicator-center badge badge-success rounded-full badge-xs"></span>
                                        </div>
                                    ) : ""}</td>
                                    <td>{prettyfy(dayProgram()[h])}</td>
                                    <td>Flohmarkt offen</td>
                                </tr>
                            )
                        }
                    </For>
                </tbody>
                <tfoot>
                    {headerFooter()}
                </tfoot>
            </table>
        </div>
    </div >
}