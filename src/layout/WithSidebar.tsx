import { JSXElement } from "solid-js"

type Props = {
    main: JSXElement;
    side: JSXElement;
}

export const WithSidebar = (props: Props) => {
    return <section class="grid gap-5 md:grid-cols-3">
        <main class="col-span-2">{props.main}</main>
        <aside>{props.side}</aside>
    </section>

}