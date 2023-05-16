import { createStore } from "solid-js/store";
import { startIsDone } from "./start/StartPage";

export const pages = ["Start", "Zeit", "Spielen", "Leiten", "Zusammenfassung"] as const;
export type PageLabel = typeof pages[number];
export type Page = {
  label: PageLabel;
  done: (userInput: UserInput) => boolean;
}

export type UserInput = {
  name: string;
  mail: string;
  phone: string;
  friend01: string;
  friend02: string;
}

export type State = {
  pages: Page[];
  userInput: UserInput;
  initialized: boolean;
  currentPage: PageLabel;
}

export const store = () => createStore<State>({
  pages: [
    { label: "Start", done: startIsDone },
    { label: "Zeit", done: () => false },
    { label: "Spielen", done: () => false },
    { label: "Leiten", done: () => false },
    { label: "Zusammenfassung", done: () => false },
  ],
  userInput: {
    name: "",
    mail: "",
    phone: "",
    friend01: "",
    friend02: "",
  },
  initialized: true,
  currentPage: "Start",
})

