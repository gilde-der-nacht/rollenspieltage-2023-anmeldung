import { SetStoreFunction, Store } from "solid-js/store";
import { ContactUser, Friend, PageLabel, Play, State, TimeWindow } from "../state";

export type Container<T> = {
    val: () => Readonly<T>;
    setVal: (n: T) => void;
}

export type ComplexContainer<T> = {
    [Properties in keyof T]: Container<T[Properties]>;
}


export const createContainers = (state: Store<State>, setState: SetStoreFunction<State>) => {
    const cc: ComplexContainer<ContactUser> = {
        name: {
            val: () => state.userInput.contact.name,
            setVal: (n) => setState('userInput', "contact", "name", n)
        },
        mail: {
            val: () => state.userInput.contact.mail,
            setVal: (n) => setState('userInput', "contact", "mail", n)
        },
        phone: {
            val: () => state.userInput.contact.phone,
            setVal: (n) => setState('userInput', "contact", "phone", n)
        },
        saturday: {
            val: () => state.userInput.contact.saturday,
            setVal: (n) => setState('userInput', "contact", "saturday", n)
        },
        sunday: {
            val: () => state.userInput.contact.sunday,
            setVal: (n) => setState('userInput', "contact", "sunday", n)
        },
        age: {
            val: () => state.userInput.contact.age,
            setVal: (n) => setState('userInput', "contact", "age", n)
        },
        help: {
            val: () => state.userInput.contact.help,
            setVal: (n) => setState('userInput', "contact", "help", n)
        },
    }

    const f1: ComplexContainer<Friend> = {
        name: {
            val: () => state.userInput.friend01.name,
            setVal: (n) => setState('userInput', "friend01", "name", n)
        },
        saturday: {
            val: () => state.userInput.friend01.saturday,
            setVal: (n) => setState('userInput', "friend01", "saturday", n)
        },
        sunday: {
            val: () => state.userInput.friend01.sunday,
            setVal: (n) => setState('userInput', "friend01", "sunday", n)
        },
        age: {
            val: () => state.userInput.friend01.age,
            setVal: (n) => setState('userInput', "friend01", "age", n)
        },
    }

    const f2: ComplexContainer<Friend> = {
        name: {
            val: () => state.userInput.friend02.name,
            setVal: (n) => setState('userInput', "friend02", "name", n)
        },
        saturday: {
            val: () => state.userInput.friend02.saturday,
            setVal: (n) => setState('userInput', "friend02", "saturday", n)
        },
        sunday: {
            val: () => state.userInput.friend02.sunday,
            setVal: (n) => setState('userInput', "friend02", "sunday", n)
        },
        age: {
            val: () => state.userInput.friend02.age,
            setVal: (n) => setState('userInput', "friend02", "age", n)
        },
    }


    const time: ComplexContainer<TimeWindow> = {
        Samstag: {
            val: () => state.userInput.time.Samstag,
            setVal: (n) => setState('userInput', "time", "Samstag", n)
        },
        Sonntag: {
            val: () => state.userInput.time.Sonntag,
            setVal: (n) => setState('userInput', "time", "Sonntag", n)
        },
        eating: {
            val: () => state.userInput.time.eating,
            setVal: (n) => setState('userInput', "time", "eating", n)
        }
    }

    const play: ComplexContainer<Play> = {
        wantsToPlay: {
            val: () => state.userInput.play.wantsToPlay,
            setVal: (n) => setState('userInput', "play", "wantsToPlay", n)
        },
        playLength: {
            val: () => state.userInput.play.playLength,
            setVal: (n) => setState('userInput', "play", "playLength", n)
        },
        genres: {
            val: () => state.userInput.play.genres,
            setVal: (n) => setState('userInput', "play", "genres", n)
        }
    }

    return { cc, f1, f2, time, play }
}

export type AllContainers = ReturnType<typeof createContainers>;

export type EventPayload = ["StartRegistration"] | ["ChangeSite", PageLabel]
export type TriggerEvent = (key: EventPayload) => void

export const createEvents = (setState: SetStoreFunction<State>): TriggerEvent => {
    return (key: EventPayload) => {
        console.log("Event triggered", key[0], key);
        switch (key[0]) {
            case "StartRegistration":
                setState("initialized", true)
                break;

            case "ChangeSite":
                setState("currentPage", key[1]);
                break;

            default:
                console.error("Undefinierter Event", key)
                break;
        }
    }
}

export const isEmptyString = (s: string | undefined): boolean => {
    return s?.trim().length === 0 ?? true;
}