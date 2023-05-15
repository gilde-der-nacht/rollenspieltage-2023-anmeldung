import { SetStoreFunction, Store } from "solid-js/store";
import { State, UserInput } from "../state";

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

export const createEvents = (setState: SetStoreFunction<State>) => {
    return () => { }
}