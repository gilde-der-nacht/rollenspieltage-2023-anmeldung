import { createStore } from "solid-js/store";

export const pages = ["Start", "Zeit", "Spielen", "Leiten", "Zusammenfassung"] as const;
type PageLabel = typeof pages[number];
export type Page =
  { label: PageLabel } & (
    ({ status: "active" | "inactive" }
      & { done: boolean })
    | { status: "disabled", reason: string })

export type UserInput = {
  name: string;
  mail: string;
  phone: string;
  friend01: string;
  friend02: string;
}

export type State = {
  pages: Page[],
  userInput: UserInput,
  initialized: boolean
}

export const store = () => createStore<State>({
  pages: [
    { label: "Start", status: "active", done: false },
    { label: "Zeit", status: "disabled", reason: "Bitte fülle zuerst den Abschnitt 'Start' aus." },
    { label: "Spielen", status: "disabled", reason: "Bitte fülle zuerst den Abschnitt 'Start' aus." },
    { label: "Leiten", status: "disabled", reason: "Bitte fülle zuerst den Abschnitt 'Start' aus." },
    { label: "Zusammenfassung", status: "disabled", reason: "Bitte fülle zuerst den Abschnitt 'Start' aus." },
  ],
  userInput: {
    name: "",
    mail: "",
    phone: "",
    friend01: "",
    friend02: "",
  },
  initialized: true,
})

