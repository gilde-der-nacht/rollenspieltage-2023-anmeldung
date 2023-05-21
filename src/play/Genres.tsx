import { For } from "solid-js"
import { Heading } from "../form/Heading"
import { Play, genres } from "../state"
import { Checkbox } from "../form/Checkbox"
import { ComplexContainer } from "../form/Values"
import { TwoColumns } from "../layout/TwoColumns"
import { GenrePicker } from "../common/GenrePicker"

type Props = {
    play: ComplexContainer<Play>;
}

export const Genres = (props: Props) => {
    return <>
        <TwoColumns left={
            <>
                <Heading title="Genres" description="Wähle aus, welche Genres du nicht gerne hast." />
                <div class="mt-3">
                    <GenrePicker active={props.play.genres} />
                </div>
            </>
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
                            <For each={genres}>
                                {(genre) => (
                                    <tr>
                                        <th>{genre}</th>
                                        <td>
                                            <progress title="ca. 35%" class="progress progress-info w-56" value="35" max="100"></progress>
                                        </td>
                                    </tr>
                                )}
                            </For>
                        </tbody>
                    </table>
                </div>
            </div>
        } />
    </>
}