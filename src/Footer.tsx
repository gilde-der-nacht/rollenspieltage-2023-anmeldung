import { Show } from "solid-js";
import { Button } from "./common/Button";
import { TriggerEvent } from "./form/Values";
import { Page, PageLabel, pages } from "./state"

type Props = {
    pages: readonly Page[];
    activePage: PageLabel;
    triggerEvent: TriggerEvent;
}

export const Footer = (props: Props) => {
    const currPage = (): number => {
        return props.pages.findIndex(p => p.label === props.activePage);
    }

    const prevPage = (): PageLabel => {
        if (currPage() === -1) { return "Start" }
        return pages[currPage() - 1]
    }

    const nextPage = (): PageLabel => {
        if (currPage() === -1) { return "Zusammenfassung" }
        return pages[currPage() + 1]
    }

    return <footer class="footer items-center p-4 mt-6 bg-neutral text-neutral-content">
        <div class="flex w-full flex-row">
            <Show when={currPage() > 0}>
                <div class="grid flex-grow h-16 place-items-start items-center">
                    <Button onClick={() => props.triggerEvent(["ChangeSite", prevPage()])}>
                        <span>
                            <span class="font-normal">Zurück zu</span>
                            <br />
                            <strong>{prevPage()}</strong>
                        </span>
                    </Button>
                </div>
            </Show>
            <Show when={currPage() < props.pages.length - 1}>
                <div class="grid flex-grow h-16 place-items-end items-center">
                    <Button onClick={() => props.triggerEvent(["ChangeSite", nextPage()])}>
                        <span>
                            <span class="font-normal">Weiter zu</span>
                            <br />
                            <strong>{nextPage()}</strong>
                        </span>
                    </Button>
                </div>
            </Show>
        </div>
    </footer>
}