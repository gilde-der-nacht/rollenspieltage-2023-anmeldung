import { For } from "solid-js"
import { Genre, genres } from "../state"
import { Container } from "../form/Values";
import { Checkbox } from "../form/Checkbox";

type Props = {
    active: Container<Genre[]>;
}

export const GenrePicker = (props: Props) => {
    return <div class="flex gap-3 flex-wrap">
        <For each={genres}>
            {(genre) => {
                const isActive = () =>
                    props.active.val().includes(genre)

                const toggleGenre = () => {
                    if (isActive()) {
                        props.active.setVal(props.active.val().filter(g => g !== genre))
                    } else {
                        props.active.setVal([...props.active.val(), genre])
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
}