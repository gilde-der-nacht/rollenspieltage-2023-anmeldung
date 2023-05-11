import { createStore } from "solid-js/store";

export const pages = ["Start", "Spielen", "Leiten", "Zusammenfassung"] as const;
type PageLabel = typeof pages[number];
export type Page =
  { label: PageLabel } & (
    { status: "active" | "inactive" }
    | { status: "disabled", reason: string })

type State = { pages: Page[] }

export const store = () => createStore<State>({
  pages: [
    { label: "Start", status: "active" },
    { label: "Spielen", status: "disabled", reason: "Bitte fülle zuerst den Abschnitt 'Start' aus." },
    { label: "Leiten", status: "disabled", reason: "Bitte fülle zuerst den Abschnitt 'Start' aus." },
    { label: "Zusammenfassung", status: "disabled", reason: "Bitte fülle zuerst den Abschnitt 'Start' aus." },
  ]
})
