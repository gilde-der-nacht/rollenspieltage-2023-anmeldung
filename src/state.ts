import { createStore } from "solid-js/store";
import { startIsDone } from "./start/StartPage";

export const pages = ["Start", "Zeit", "Spielen", "Leiten", "Zusammenfassung"] as const;
export type PageLabel = typeof pages[number];
export type Page = {
  label: PageLabel;
  done: (userInput: UserInput) => boolean;
}

export type Availability = {
  saturday: boolean;
  sunday: boolean;
}

export const ageGroups = [
  "6 bis 9 Jahre",
  "10 bis 16 Jahre",
  "16+ Jahre"
] as const;

export type AgeGroup = typeof ageGroups[number];

export type ContactUser = {
  name: string;
  mail: string;
  phone: string;
  age: AgeGroup;
} & Availability;

export type Friend = {
  name: string;
  age: AgeGroup;
} & Availability;

export type UserInput = {
  contact: ContactUser;
  friend01: Friend;
  friend02: Friend;
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
    contact: {
      name: "",
      mail: "",
      phone: "",
      saturday: true,
      sunday: true,
      age: "16+ Jahre",
    },
    friend01: {
      name: "",
      saturday: true,
      sunday: true,
      age: "16+ Jahre"

    },
    friend02: {
      name: "",
      saturday: true,
      sunday: true,
      age: "16+ Jahre"

    },
  },
  initialized: true,
  currentPage: "Start",
})

