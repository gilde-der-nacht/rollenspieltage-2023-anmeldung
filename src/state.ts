import { createStore } from "solid-js/store";

export const pages = ["Start", "Spielen", "Leiten", "Zusammenfassung"] as const;
type PageLabel = typeof pages[number];
export type Page =
  { label: PageLabel } & (
    ({ status: "active" | "inactive" }
      & { done: boolean })
    | { status: "disabled", reason: string })

export type UserInput = {
  name: string;
  email: string;
  phone: string;
}

type State = { pages: Page[], userInput: UserInput }

export const store = () => createStore<State>({
  pages: [
    { label: "Start", status: "active", done: false },
    { label: "Spielen", status: "disabled", reason: "Bitte fülle zuerst den Abschnitt 'Start' aus." },
    { label: "Leiten", status: "disabled", reason: "Bitte fülle zuerst den Abschnitt 'Start' aus." },
    { label: "Zusammenfassung", status: "disabled", reason: "Bitte fülle zuerst den Abschnitt 'Start' aus." },
  ],
  userInput: {
    name: "",
    email: "",
    phone: ""
  }
})
