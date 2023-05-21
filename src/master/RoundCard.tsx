import { Card } from "../common/Card";
import { MasterRound } from "../state"

type Props = {
    value: MasterRound;
}

export const RoundCard = (props: Props) => {
    return <Card>
        <h4 class="text-xl font-bold">{props.value.title}</h4>
        <p>{props.value.system}</p>
    </Card>
}