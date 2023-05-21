import { Checkbox } from "../form/Checkbox"
import { Heading } from "../form/Heading"
import { ComplexContainer } from "../form/Values";
import { Master, UserInput } from "../state";
import { RoundsList } from "./RoundsList";

type Props = {
    master: ComplexContainer<Master>;
}

export const MasterPage = (props: Props) => {
    return <>
        <Heading title="Leiten" />
        <div class="my-3">
            <Checkbox
                isChecked={props.master.wantsToMaster.val}
                label="Ich möchte gerne als Spielleiter:in teilnehmen."
                onClick={() => props.master.wantsToMaster.setVal(!props.master.wantsToMaster.val())}
            />
        </div>
        <RoundsList master={props.master} />
    </>
}

export const masterIsDone = (userInput: UserInput): boolean => {
    if (!userInput.master.wantsToMaster) {
        return true;
    }
    if (userInput.master.gameRounds.length > 0) {
        return true;
    }
    return false;
}
