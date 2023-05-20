import { For, Show } from "solid-js"
import { Heading } from "../form/Heading"
import { Checkbox } from "../form/Checkbox"
import { Eating, TimeWindow, eating } from "../state"
import { ComplexContainer, Container } from "../form/Values"
import { dinner, lunch, program } from "./DayCalendar"
import { RadioButton } from "../form/RadioButton"

type Props = {
    time: ComplexContainer<TimeWindow>;
}

export const EatingQuestion = (props: Props) => {
    const showQuestion = (): boolean => {
        const prSa = program.Samstag.program;
        const prSo = program.Sonntag.program;

        const ea = Object.entries(prSa).filter(([_, event]) => [lunch, dinner].includes(event as any)).map(([time, _]) => Number.parseInt(time));
        const eo = Object.entries(prSo).filter(([_, event]) => [lunch, dinner].includes(event as any)).map(([time, _]) => Number.parseInt(time));

        let ret = false;
        ea.forEach((time) => {
            if (Number.parseInt(props.time.Samstag.val().start) <= time && Number.parseInt(props.time.Samstag.val().end) > time) {
                ret = true;
            }
        })
        eo.forEach((time) => {
            if (Number.parseInt(props.time.Sonntag.val().start) <= time && Number.parseInt(props.time.Samstag.val().end) > time) {
                ret = true;
            }
        })
        return ret;
    }

    return <Show when={showQuestion()}>
        <Heading title="Verpflegung" description="Du hast ausgewählt, dass du am Mittag- und/oder Nachtessen vor Ort sein wirst. Wir werden jeweils eine warme Mahlzeit kochen. Damit wir die Mengen einwenig vorab einschätzen können, würden wir uns freuen, wenn du folgende Frage ausfüllst." />
        <label class="label my-3">
            <strong>
                <span class="label-text">Planst du vor Ort zu Essen?</span>
            </strong>
        </label>
        <div class="flex gap-6 flex-wrap">
            <For each={eating}>
                {
                    (option) => (
                        <RadioButton id="eating" label={option} isChecked={() => props.time.eating.val() === option}
                            onClick={() => { props.time.eating.setVal(option) }} />
                    )
                }
            </For>
        </div>
    </Show>
}

