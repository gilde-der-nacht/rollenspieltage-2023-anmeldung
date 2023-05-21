import { createSignal, createUniqueId } from "solid-js"
import { Master, MasterRound } from "../state"
import { useModal } from "../common/Modal";
import { RoundForm } from "./RoundForm";
import { ComplexContainer } from "../form/Values";

type Props = {
    master: ComplexContainer<Master>;
}

const getDefaultRound = (): MasterRound => ({
    id: crypto.randomUUID(),
    title: "",
    system: "",
    duration: 2,
    minPlayer: 2,
    maxPlayer: 4,
})

const [round, setRound] = createSignal<MasterRound>(getDefaultRound());
const { Modal, ModalButton, closeModal } = useModal("new-round");

export const AddRounds = (props: Props) => {
    const abort = () => {
        setRound(getDefaultRound());
        closeModal();
    }

    const saveRound = () => {
        const prependedList: MasterRound[] = [round(), ...props.master.gameRounds.val()];
        props.master.gameRounds.setVal(prependedList);
        abort();
    }

    return <>
        <div class="my-4">
            <ModalButton>
                <span>
                    + Spielrunde hinzufügen
                </span>
            </ModalButton>
        </div>
        <Modal>
            <RoundForm isNew={true}
                onSubmit={saveRound}
                onAbort={abort}
                value={[round, setRound]}
            />
        </Modal>
    </>
}