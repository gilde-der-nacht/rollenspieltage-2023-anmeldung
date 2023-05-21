import { For, Show, Signal, createSignal } from "solid-js";
import { Heading } from "../form/Heading";
import { MasterRound, MasterRoundDuration, masterRoundDuration } from "../state"
import { TextInput } from "../form/TextInput";
import { Container, isEmptyString } from "../form/Values";
import { RadioButton } from "../form/RadioButton";
import { NumberInput } from "../form/NumberInput";
import { Button } from "../common/Button";
import { parseTimeString } from "../time/timeUtil";
import { Alert } from "../common/Alert";

type Props = {
    value: Signal<MasterRound>;
    isNew: boolean;
    onSubmit: () => void;
    onReset: () => void;
}

const [validate, setValidate] = createSignal(false);

export const RoundForm = (props: Props) => {
    const [round, setRound] = props.value;

    const title: Container<string> = {
        val: () => round().title,
        setVal: (n) => setRound((prev) => ({ ...prev, title: n }))
    };

    const system: Container<string> = {
        val: () => round().system,
        setVal: (n) => setRound((prev) => ({ ...prev, system: n }))
    };

    const duration: Container<MasterRoundDuration> = {
        val: () => round().duration,
        setVal: (n) => setRound((prev) => ({ ...prev, duration: n }))
    };

    const minPlayer: Container<number> = {
        val: () => round().minPlayer,
        setVal: (n) => setRound((prev) => ({ ...prev, minPlayer: n }))
    };

    const maxPlayer: Container<number> = {
        val: () => round().maxPlayer,
        setVal: (n) => setRound((prev) => ({ ...prev, maxPlayer: n }))
    };

    const errors = () => {
        const e = [];
        if (isEmptyString(title.val())) {
            e.push("Titel ist ein Pflichtfeld.");
        }
        if (isEmptyString(system.val())) {
            e.push("System ist ein Pflichtfeld.");
        }
        if (isNaN(minPlayer.val()) || minPlayer.val() < 1) {
            e.push("'Spieleranzahl Minimum' ist eine ungültige Zahl.")
        }
        if (isNaN(maxPlayer.val())) {
            e.push("'Spieleranzahl Maximum' ist eine ungültige Zahl.")
        }
        if (minPlayer.val() > maxPlayer.val()) {
            e.push("Spieleranzahl: Das Minimum darf nicht grösser sein als das Maximum.")
        }
        return e;
    }


    const submit = () => {
        setValidate(true);
        const e = errors();
        if (e.length === 0) {
            props.onSubmit();
        }
    }

    return <form>
        <Heading title={props.isNew ? "Spielrunde erstellen" : "Spielrunde editieren"} />
        <TextInput label="Titel" value={title} />
        <TextInput label="System" value={system} />
        <label class="label">
            <strong>
                <span class="label-text">Dauer</span>
            </strong>
        </label>
        <div class="flex gap-3 flex-wrap">
            <For each={masterRoundDuration}>
                {(d) => (
                    <RadioButton
                        id="duration"
                        isChecked={() => duration.val() === d}
                        label={`${d} Stunden`}
                        onClick={() => duration.setVal(d)} />
                )}
            </For>
        </div>
        <NumberInput label="Spieleranzahl Minimum" value={minPlayer} />
        <NumberInput label="Spieleranzahl Maximum" value={maxPlayer} />
        <Show when={validate() && errors().length > 0}>
            <Alert kind="error" text={errors().join(" ")} />
        </Show>
        <div class="flex gap-3 flex-wrap">
            <Button onClick={(e) => { e.preventDefault(); props.onReset() }} secondary={true}>Abbrechen</Button>
            <Button onClick={(e) => { e.preventDefault(); submit() }}>{props.isNew ? "Erstellen" : "Speichern"}</Button>
        </div>
    </form>
}