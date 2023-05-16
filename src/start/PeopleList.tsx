import { Show } from "solid-js";
import { Card } from "../common/Card";
import { Heading } from "../form/Heading"
import { Container } from "../form/Values";
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

    const removeFriend = (which: "1" | "2") => {
        if (which === "1") {
            const sec = props.friend02.val();
            props.friend01.setVal(sec);
        }
        props.friend02.setVal("");
    }

    return <div class="grid gap-4">
        <Heading title="Anmeldung als Gruppe" description="Hier hast du die Möglichkeit bis zu zwei weitere Personen anzumelden, die dasselbe Programm erhalten werden wie du." />
        <Card content={"1: " + props.name.val() + " (Kontaktperson)"} />
        <Show when={props.friend01.val().trim().length > 0}>
            <Card content={"2: " + props.friend01.val()} remove={() => removeFriend("1")} />
        </Show>
        <Show when={props.friend02.val().trim().length > 0}>
            <Card content={"3: " + props.friend02.val()} remove={() => removeFriend("2")} />
        </Show>
        <Show when={emptySlots()} fallback={
            <Alert kind="info" text="Es können keine weitere Personen dieser Gruppe hinzugefügt werden. Seid ihr mehr als drei Personen, dann teilt euch bitte in kleinere Gruppen auf." />
        }>
            <InputAndButton placeholder="Mitspieler hinzufügen ..." onClick={addFriend}>+</InputAndButton>
        </Show>
    </div>
}