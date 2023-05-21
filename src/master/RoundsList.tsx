import { For } from "solid-js";
import { Heading } from "../form/Heading"
import { ComplexContainer } from "../form/Values";
import { Master, masterRoundDuration } from "../state";
import { AddRounds } from "./AddRound"
import { RoundCard } from "./RoundCard";

type Props = {
    master: ComplexContainer<Master>;
}

export const RoundsList = (props: Props) => {
    return <>
        <Heading title="Liste deiner Runden" />
        <AddRounds master={props.master} />
        <div class="grid gap-3 md:grid-cols-3">
            <For each={props.master.gameRounds.val()}>
                {(round) => (
                    <RoundCard value={round} />
                )}
            </For>
        </div>
    </>
}