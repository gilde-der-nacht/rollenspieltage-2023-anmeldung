import { Heading } from "../form/Heading"
import { ComplexContainer } from "../form/Values";
import { Master } from "../state";
import { AddRounds } from "./AddRound"

type Props = {
    master: ComplexContainer<Master>;
}

export const RoundsList = (props: Props) => {
    return <>
        <Heading title="Liste deiner Runden" />
        <AddRounds master={props.master} />
    </>
}