import { createSignal } from "solid-js";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Master, MasterRound } from "../state"
import { useModal } from "../common/Modal";
import { RoundForm } from "./RoundForm";
import { ComplexContainer } from "../form/Values";

type Props = {
    value: MasterRound;
    master: ComplexContainer<Master>;
}

export const RoundCard = (props: Props) => {

    const [round, setRound] = createSignal<MasterRound>({ ...props.value });
    const { Modal, ModalButton, closeModal } = useModal(props.value.id);

    const saveRound = () => {
        const prependedList: MasterRound[] = [round(), ...props.master.gameRounds.val().filter(r => r.id !== props.value.id)];
        props.master.gameRounds.setVal(prependedList);
        closeModal();
    }

    const abortEditing = () => {
        setRound({ ...props.value });
        closeModal();
    }

    const deleteRound = () => {
        const prependedList: MasterRound[] = props.master.gameRounds.val().filter(r => r.id !== props.value.id);
        props.master.gameRounds.setVal(prependedList);
        closeModal();
    }

    return <>
        <Card buttons={
            <ModalButton >Editieren</ModalButton>
        }>
            <h4 class="text-xl font-bold">{props.value.title}</h4>
            <p>{props.value.system}</p>
        </Card>
        <Modal>
            <RoundForm isNew={false}
                onSubmit={saveRound}
                onAbort={abortEditing}
                onDelete={deleteRound}
                value={[round, setRound]}
            />
        </Modal>
    </>
}