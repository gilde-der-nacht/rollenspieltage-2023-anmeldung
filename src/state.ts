import { createStore } from "solid-js/store";

export const pages = ["Start", "Zeit", "Spielen", "Leiten", "Zusammenfassung"] as const;
type PageLabel = typeof pages[number];
export type Page =
  { label: PageLabel } & (
    ({ status: "active" | "inactive" }
      & { done: boolean })
  )


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
    { label: "Zeit", status: "inactive", done: false },
    { label: "Spielen", status: "inactive", done: false },
    { label: "Leiten", status: "inactive", done: false },
    { label: "Zusammenfassung", status: "inactive", done: false },
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

