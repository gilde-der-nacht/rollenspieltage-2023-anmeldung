import { For, Signal } from "solid-js";
import { Heading } from "../form/Heading";
import { MasterRound, MasterRoundDuration, masterRoundDuration } from "../state"
import { TextInput } from "../form/TextInput";
import { Container } from "../form/Values";
import { RadioButton } from "../form/RadioButton";
import { NumberInput } from "../form/NumberInput";
import { Button } from "../common/Button";

type Props = {
    value: Signal<MasterRound>;
    isNew: boolean;
    onSubmit: () => void;
    onReset: () => void;
}


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
        <div class="flex gap-3 flex-wrap">
            <Button onClick={(e) => { e.preventDefault(); props.onReset() }} secondary={true}>Abbrechen</Button>
            <Button onClick={(e) => { e.preventDefault(); props.onSubmit() }}>{props.isNew ? "Erstellen" : "Speichern"}</Button>
        </div>
    </form>
}