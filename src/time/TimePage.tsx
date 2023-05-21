import { Heading } from "../form/Heading"
import { AllContainers, isEmptyString } from "../form/Values"
import { TwoColumns } from "../layout/TwoColumns"
import { UserInput } from "../state"
import { DayAvailability } from "./DayAvailability"
import { DayCalendar } from "./DayCalendar"
import { EatingQuestion } from "./EatingQuestion"
import { StartEndChooser } from "./StartEndChooser"
import { rangeIsValid } from "./timeUtil"

type Props = {
    containers: AllContainers;
}

export const TimePage = (props: Props) => {
    return <div>
        <Heading title="Zeitplan" />
        <TwoColumns left={
            <div class="grid gap-5">
                <h4 class="text-xl font-bold mt-3">Samstag, 26. August</h4>
                <DayAvailability containers={props.containers} day="Samstag" />
                <StartEndChooser day="Samstag" time={props.containers.time} />
                <DayCalendar day="Samstag" time={props.containers.time} />
            </div>
        } right={
            <div class="grid gap-5">
                <h4 class="text-xl font-bold mt-3">Sonntag, 27. August</h4>
                <DayAvailability containers={props.containers} day="Sonntag" />
                <StartEndChooser day="Sonntag" time={props.containers.time} />
                <DayCalendar day="Sonntag" time={props.containers.time} />
                <EatingQuestion time={props.containers.time} />
            </div>
        } />
    </div>
}

export const timeIsDone = (userInput: UserInput): boolean => {
    if (!userInput.contact.saturday && !userInput.contact.sunday) {
        return false;
    }

    if (userInput.contact.saturday ||
        (!isEmptyString(userInput.friend01.name) &&
            userInput.friend01.saturday) ||
        (!isEmptyString(userInput.friend02.name) &&
            userInput.friend02.saturday)) {
        if (userInput.time.Samstag.start === "Startzeit wählen" || userInput.time.Samstag.end === "Endzeit wählen") {
            return false;
        }
        try {
            if (!rangeIsValid(userInput.time.Samstag.start, userInput.time.Samstag.end)) {
                return false;
            }
        } catch (_) {
        }
    }

    if (userInput.contact.sunday ||
        (!isEmptyString(userInput.friend01.name) &&
            userInput.friend01.sunday) ||
        (!isEmptyString(userInput.friend02.name) &&
            userInput.friend02.sunday)) {
        if (userInput.time.Sonntag.start === "Startzeit wählen" || userInput.time.Sonntag.end === "Endzeit wählen") {
            return false;
        }
        try {
            if (!rangeIsValid(userInput.time.Sonntag.start, userInput.time.Sonntag.end)) {
                return false;
            }
        } catch (_) {
        }
    }

    return true
}