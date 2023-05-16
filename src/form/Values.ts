import { SetStoreFunction, Store } from "solid-js/store";
import { PageLabel, State, UserInput } from "../state";

export type Container<T> = {
    val: () => T;
    setVal: (n: T) => void;
}

export const createContainers = (state: Store<State>, setState: SetStoreFunction<State>) => {
    const createContainer = (s: keyof UserInput): Container<string> => ({
        val: () => state.userInput[s],
        setVal: (n) => setState('userInput', s, n)
    })

    const [name, mail, phone, friend01, friend02] = ["name", "mail", "phone", "friend01", "friend02"].map(createContainer);

    return { name, mail, phone, friend01, friend02 }
}

export type EventPayload = ["StartRegistration"] | ["ChangeSite", PageLabel]
export type TriggerEvent = (key: EventPayload) => void

export const createEvents = (setState: SetStoreFunction<State>): TriggerEvent => {
    return (key: EventPayload) => {
        switch (key[0]) {
            case "StartRegistration":
                setState("initialized", true)
                break;

            case "ChangeSite":
                setState('pages', (prev) => prev.map(p => ({ ...p, status: p.label === key[1] ? "active" : "inactive" })));
                break;

            default:
                console.error("Undefinierter Event", key)
                break;
        }
    }
}