import { JSXElement } from "solid-js"


export const useModal = (id: string) => {
    const ModalButton = () => {
        return <label for={id} class="btn">open modal</label>
    }

    const Modal = (props: { children: JSXElement }) => {
        return <>
            <input type="checkbox" id={id} class="modal-toggle" />
            <div class="modal cursor-pointer">
                <div class="modal-box">
                    {props.children}
                </div>
            </div>
        </>
    }

    return { ModalButton, Modal }
}