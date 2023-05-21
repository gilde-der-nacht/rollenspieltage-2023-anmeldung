import { For } from "solid-js"
import { Checkbox } from "../form/Checkbox"
import { Heading } from "../form/Heading"
import { ComplexContainer } from "../form/Values"
import { Play, playLength } from "../state"
import { RadioButton } from "../form/RadioButton"
import { TwoColumns } from "../layout/TwoColumns"
import { Genres } from "./Genres"

type Props = {
    play: ComplexContainer<Play>;
}

export const PlayPage = (props: Props) => {
    return <>
        <Heading title="Spielen" />
        <div class="mt-3">
            <Checkbox isChecked={props.play.wantsToPlay.val} label="Ich möchte gerne als Spieler:in teilnehmen." onClick={() => props.play.wantsToPlay.setVal(!props.play.wantsToPlay.val())} />
        </div>
        <TwoColumns left={
            <div>
                <label class="label my-3">
                    <strong>
                        <span class="label-text">Bevorzugst du eher kurze oder lange Spielrunden?</span>
                    </strong>
                </label>
                <div class="grid gap-6">
                    <For each={playLength}>
                        {
                            (option) => (
                                <RadioButton id="playLength"
                                    label={option}
                                    isChecked={() => props.play.playLength.val() === option}
                                    onClick={() => { props.play.playLength.setVal(option) }} />
                            )
                        }
                    </For>
                </div>
            </div>
        } right={
            <div>
                <label class="label my-3">
                    <strong>
                        <span class="label-text">Schätzung der zur Verfügung stehenden Spielrunden.</span>
                    </strong>
                </label>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <tbody>
                            <tr>
                                <th>Dauer: 2 Stunden</th>
                                <td>
                                    <progress title="ca. 35%" class="progress progress-info w-56" value="35" max="100"></progress>
                                </td>
                            </tr>
                            <tr>
                                <th>Dauer: 4 Stunden</th>
                                <td>
                                    <progress title="ca. 65%" class="progress progress-info w-56" value="65" max="100"></progress>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        } />
        <div class="mt-6">
            <Genres play={props.play} />
        </div>
    </>
}

export const playIsDone = (): boolean => true