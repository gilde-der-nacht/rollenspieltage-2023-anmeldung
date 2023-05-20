import { Show } from "solid-js";
import { Card } from "../common/Card";
import { Heading } from "../form/Heading"
import { AllContainers } from "../form/Values";
import { Alert } from "../common/Alert";
import { InputAndButton } from "../form/InputAndButton";

export type PeopleListProps = {
    containers: AllContainers;
}

export const PeopleList = (props: PeopleListProps) => {
    const emptySlots = () => {
        return props.containers.f1.name.val().trim().length === 0 || props.containers.f2.name.val().trim().length === 0
    }

    const addFriend = (name: string) => {
        if (props.containers.f1.name.val().trim().length === 0) {
            props.containers.f1.name.setVal(name);
        } else if (props.containers.f2.name.val().trim().length === 0) {
            props.containers.f2.name.setVal(name);
        }
    }

    const removeFriend = (which: "1" | "2") => {
        if (which === "1") {
            const sec = props.containers.f2.name.val();
            props.containers.f1.name.setVal(sec);
        }
        props.containers.f2.name.setVal("");
    }

    return <div class="grid gap-4">
        <Heading title="Anmeldung als Gruppe" description="Hier hast du die Möglichkeit bis zu zwei weitere Personen anzumelden, die dasselbe Programm erhalten werden wie du." />
        <Card content={"1: " + props.containers.cc.name.val() + " (Kontaktperson)"} />
        <Show when={props.containers.f1.name.val().trim().length > 0}>
            <Card content={"2: " + props.containers.f1.name.val()} remove={() => removeFriend("1")} />
        </Show>
        <Show when={props.containers.f2.name.val().trim().length > 0}>
            <Card content={"3: " + props.containers.f2.name.val()} remove={() => removeFriend("2")} />
        </Show>
        <Show when={emptySlots()} fallback={
            <Alert kind="info" text="Es können keine weitere Personen dieser Gruppe hinzugefügt werden. Seid ihr mehr als drei Personen, dann teilt euch bitte in kleinere Gruppen auf." />
        }>
            <InputAndButton placeholder="Mitspieler hinzufügen ..." onClick={addFriend}>+</InputAndButton>
        </Show>
    </div>
}