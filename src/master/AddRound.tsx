import { createSignal } from "solid-js"
import { Master, MasterRound } from "../state"
import { useModal } from "../common/Modal";
import { RoundForm } from "./RoundForm";
import { ComplexContainer } from "../form/Values";

type Props = {
    master: ComplexContainer<Master>;
}

const defaultRound: MasterRound = {
    title: "",
    system: "",
    duration: 2,
    minPlayer: 2,
    maxPlayer: 4,
}

const [round, setRound] = createSignal<MasterRound>({ ...defaultRound });
const { Modal, ModalButton, closeModal } = useModal("new-round");

export const AddRounds = (props: Props) => {
    const reset = () => {
        setRound({ ...defaultRound });
        closeModal();
    }

    const saveRound = () => {
        const prependedList: MasterRound[] = [round(), ...props.master.gameRounds.val()];
        props.master.gameRounds.setVal(prependedList);
        reset();
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
                onReset={reset}
                value={[round, setRound]}
            />
        </Modal>
    </>
}