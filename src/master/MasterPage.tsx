import { Checkbox } from "../form/Checkbox"
import { Heading } from "../form/Heading"
import { ComplexContainer } from "../form/Values";
import { Master } from "../state";

type Props = {
    master: ComplexContainer<Master>;
}

export const MasterPage = (props: Props) => {
    return <>
        <Heading title="Leiten" />
        <div class="mt-3">
            <Checkbox
                isChecked={props.master.wantsToMaster.val}
                label="Ich möchte gerne als Spielleiter:in teilnehmen."
                onClick={() => props.master.wantsToMaster.setVal(!props.master.wantsToMaster.val())}
            />
        </div>

    </>
}