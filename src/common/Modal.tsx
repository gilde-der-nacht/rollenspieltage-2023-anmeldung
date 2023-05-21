import { JSXElement } from "solid-js"


export const useModal = (id: string) => {
    const ModalButton = (props: { children: JSXElement }) => {
        return <label for={id} class="btn">{props.children}</label>
    }

    const Modal = (props: { children: JSXElement }) => {
        return <>
            <input type="checkbox" id={id} class="modal-toggle" />
            <label for={id} class="modal modal-bottom sm:modal-middle cursor-pointer">
                <label class="modal-box relative" for="">
                    {props.children}
                </label>
            </label>
        </>
    }

    const closeModal = () => {
        if (id !== "") {
            (document.getElementById(id) as HTMLInputElement).checked = false;
        }
    }

    return { ModalButton, Modal, closeModal }
}