import { Show } from "solid-js";
import { Card } from "../common/Card";
import { Heading } from "../form/Heading"
import { AllContainers, isEmptyString } from "../form/Values";
import { Alert } from "../common/Alert";
import { InputAndButton } from "../form/InputAndButton";
import { Availability } from "./Availability";
import { AgeGroupSwitch } from "./AgeGroupSwitch";

export type PeopleListProps = {
    containers: AllContainers;
}

export const PeopleList = (props: PeopleListProps) => {
    const emptySlots = () => {
        return isEmptyString(props.containers.f1.name.val()) || isEmptyString(props.containers.f2.name.val())
    }

    const addFriend = (name: string) => {
        if (isEmptyString(props.containers.f1.name.val())) {
            props.containers.f1.name.setVal(name);
        } else if (isEmptyString(props.containers.f2.name.val())) {
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
        <Card>
            <div class="grid gap-2">
                <span>
                    1: <strong>{props.containers.cc.name.val()}</strong> (Du)
                </span>
                <Availability label={false} saturday={props.containers.cc.saturday} sunday={props.containers.cc.sunday} />
                <AgeGroupSwitch ageGroup={props.containers.cc.age} id="pl0" />
            </div>
        </Card>
        <Show when={!isEmptyString(props.containers.f1.name.val())}>
            <Card remove={() => removeFriend("1")} >
                <div class="grid gap-2">
                    <span>
                        2: <strong>{props.containers.f1.name.val()}</strong>
                    </span>
                    <Availability label={false} saturday={props.containers.f1.saturday} sunday={props.containers.f1.sunday} />
                    <AgeGroupSwitch ageGroup={props.containers.f1.age} id="pl1" />
                </div>
            </Card>
        </Show>
        <Show when={!isEmptyString(props.containers.f2.name.val())}>
            <Card remove={() => removeFriend("2")} >
                <div class="grid gap-2">
                    <span>
                        3: <strong>{props.containers.f2.name.val()}</strong>
                    </span>
                    <Availability label={false} saturday={props.containers.f2.saturday} sunday={props.containers.f2.sunday} />
                    <AgeGroupSwitch ageGroup={props.containers.f2.age} id="pl2" />
                </div>
            </Card>
        </Show>
        <Show when={emptySlots()} fallback={
            <Alert kind="info" text="Es können keine weitere Personen dieser Gruppe hinzugefügt werden. Seid ihr mehr als drei Personen, dann teilt euch bitte in kleinere Gruppen auf." />
        }>
            <InputAndButton placeholder="Mitspieler hinzufügen ..." onClick={addFriend}>+</InputAndButton>
        </Show>
    </div>
}