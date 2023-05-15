import { Show } from "solid-js";
import { Card } from "../common/Card";
import { Heading } from "../form/Heading"
import { Container } from "../form/Values";
import { Button } from "../common/Button";
import { Alert } from "../common/Alert";
import { InputAndButton } from "../form/InputAndButton";

export type PeopleListProps = {
    name: Container<string>;
    friend01: Container<string>;
    friend02: Container<string>;
}

export const PeopleList = (props: PeopleListProps) => {
    const emptySlots = () => {
        return props.friend01.val().trim().length === 0 || props.friend02.val().trim().length === 0
    }

    const addFriend = (name: string) => {
        if (props.friend01.val().trim().length === 0) {
            props.friend01.setVal(name);
        } else if (props.friend02.val().trim().length === 0) {
            props.friend02.setVal(name);
        }
    }

    return <div class="grid gap-4">
        <Heading title="Anmeldung als Gruppe" description="Hier hast du die Möglichkeit bis zu zwei weitere Personen anzumelden, die dasselbe Programm erhalten werden wie du." />
        <Card content={"Kontaktperson: " + props.name.val()} />
        <Show when={emptySlots()} fallback={
            <Alert kind="info" text="Es können keine weitere Personen dieser Gruppe hinzugefügt werden. Seid ihr mehr als drei Personen, dann teilt euch bitte in kleinere Gruppen auf." />
        }>
            <InputAndButton onClick={addFriend}>+</InputAndButton>
        </Show>
    </div>
}