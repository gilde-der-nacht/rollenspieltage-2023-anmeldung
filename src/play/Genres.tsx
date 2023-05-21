import { For } from "solid-js"
import { Heading } from "../form/Heading"
import { Play, genres } from "../state"
import { Checkbox } from "../form/Checkbox"
import { ComplexContainer } from "../form/Values"

type Props = {
    play: ComplexContainer<Play>;
}

export const Genres = (props: Props) => {
    return <>
        <Heading title="Genres" description="Wähle aus, welche Genres du nicht gerne hast." />
        <div class="flex gap-3 flex-wrap mt-3">
            <For each={genres}>
                {(genre) => {
                    const isActive = () =>
                        props.play.genres.val().includes(genre)

                    const toggleGenre = () => {
                        if (isActive()) {
                            props.play.genres.setVal(props.play.genres.val().filter(g => g !== genre))
                        } else {
                            props.play.genres.setVal([...props.play.genres.val(), genre])
                        }
                    }

                    return (
                        <Checkbox
                            isChecked={isActive}
                            label={genre}
                            onClick={toggleGenre}
                        />
                    )
                }}
            </For>
        </div>
    </>
}