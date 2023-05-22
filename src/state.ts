import { createStore } from "solid-js/store";
import { startIsDone } from "./start/StartPage";
import { timeIsDone } from "./time/TimePage";
import { playIsDone } from "./play/PlayPage";
import { masterIsDone } from "./master/MasterPage";

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
  help: boolean;
} & Availability;

export type Friend = {
  name: string;
  age: AgeGroup;
} & Availability;

export const eating = ["Ich werde vermutlich von eure Essensangebot gebrauch machen.", "Keine Angabe", "Ich werde mich voraussichtlich selber um meine Verpflegung kümmern."] as const;
export type Eating = typeof eating[number];

export type TimeWindow = {
  [Properties in Day]: {
    start: string;
    end: string;
  };
} & { eating: Eating }

export const playLength = [
  "Ich bevorzuge kürzere Spielrunden (2 Stunden).", "Keine Angabe", "Ich bevorzuge längere Spielrunden (4 Stunden)."
] as const;
export type PlayLength = typeof playLength[number];

export const genres = ["Fantasy", "Science Fiction", "Horror", "Krimi", "Modern"] as const;
export type Genre = typeof genres[number];

export type Play = {
  wantsToPlay: boolean;
  playLength: PlayLength;
  genres: Readonly<Genre[]>;
}

export const masterRoundDuration = [2, 4] as const;
export type MasterRoundDuration = typeof masterRoundDuration[number];

export type MasterRound = {
  id: string;
  title: string;
  system: string;
  duration: MasterRoundDuration;
  minPlayer: number;
  maxPlayer: number;
  ages: Readonly<AgeGroup[]>;
  genres: Readonly<Genre[]>;
}

export type Master = {
  wantsToMaster: boolean;
  gameRounds: Readonly<MasterRound[]>;
}

export type UserInput = {
  contact: ContactUser;
  friend01: Friend;
  friend02: Friend;
  time: TimeWindow;
  play: Play;
  master: Master;
}

export type State = {
  pages: Page[];
  userInput: UserInput;
  initialized: boolean;
  currentPage: PageLabel;
}

export type Day = "Samstag" | "Sonntag";

export const store = () => createStore<State>({
  pages: [
    { label: "Start", done: startIsDone },
    { label: "Zeit", done: timeIsDone },
    { label: "Spielen", done: playIsDone },
    { label: "Leiten", done: masterIsDone },
    { label: "Zusammenfassung", done: () => false },
  ],
  userInput: {
    contact: {
      name: "Hans Muster",
      mail: "mail@muster.hans",
      phone: "",
      saturday: true,
      sunday: true,
      help: false,
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
    time: {
      Samstag: {
        start: "Startzeit wählen",
        end: "Endzeit wählen",
      },
      Sonntag: {
        start: "Startzeit wählen",
        end: "Endzeit wählen",
      },
      eating: "Keine Angabe"
    },
    play: {
      wantsToPlay: true,
      playLength: "Keine Angabe",
      genres: [],
    },
    master: {
      wantsToMaster: false,
      gameRounds: [],
    }
  },
  initialized: true,
  currentPage: "Zusammenfassung",
})

