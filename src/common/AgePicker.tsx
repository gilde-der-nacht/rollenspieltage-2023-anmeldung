import { For } from "solid-js"
import { AgeGroup, Genre, ageGroups, genres } from "../state"
import { Container } from "../form/Values";
import { Checkbox } from "../form/Checkbox";

type Props = {
    active: Container<AgeGroup[]>;
}

export const AgePicker = (props: Props) => {
    return <div class="flex gap-3 flex-wrap">
        <For each={ageGroups}>
            {(ag) => {
                const isActive = () =>
                    props.active.val().includes(ag)

                const toggleAgeGroup = () => {
                    if (isActive()) {
                        props.active.setVal(props.active.val().filter(g => g !== ag))
                    } else {
                        props.active.setVal([...props.active.val(), ag])
                    }
                }

                return (
                    <Checkbox
                        isChecked={isActive}
                        label={ag}
                        onClick={toggleAgeGroup}
                    />
                )
            }}
        </For>
    </div>
}