import { Heading } from "../form/Heading"
import { AllContainers } from "../form/Values"
import { TwoColumns } from "../layout/TwoColumns"
import { DayAvailability } from "./DayAvailability"
import { DayCalendar } from "./DayCalendar"
import { StartEndChooser } from "./StartEndChooser"

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
                <DayCalendar day="Samstag" />
            </div>
        } right={
            <div class="grid gap-5">
                <h4 class="text-xl font-bold mt-3">Sonntag, 27. August</h4>
                <DayAvailability containers={props.containers} day="Sonntag" />
                <StartEndChooser day="Sonntag" time={props.containers.time} />
                <DayCalendar day="Sonntag" />
            </div>
        } />
    </div>
}