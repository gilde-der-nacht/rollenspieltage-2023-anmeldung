import { For } from "solid-js";
import { Day } from "../state";

type Props = {
    day: Day;
}

export const program = {
    Samstag: {
        start: 10, end: 24, program: {
            10: "Block", 12: "Mittagessen", 13: "Block", 15: "Block", 17: "Block", 19: "Nachtessen", 20: "Block", 22: "Block"
        }
    },
    Sonntag: {
        start: 10, end: 19, program: {
            10: "Block", 12: "Mittagessen", 13: "Block", 15: "Block", 17: "Block"
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

const isEating = (t: string | undefined): boolean => t === "Mittagessen" || t === "Nachtessen";

export const DayCalendar = (props: Props) => {
    const headerFooter = () => (
        <tr>
            <th>Startzeit</th>
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