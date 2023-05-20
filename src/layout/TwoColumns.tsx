import { JSXElement } from "solid-js"

type Props = {
    left: JSXElement;
    right: JSXElement;
}

export const TwoColumns = (props: Props) => {
    return <section class="grid gap-5 md:grid-cols-2">
        <aside >{props.left}</aside>
        <aside>{props.right}</aside>
    </section>

}