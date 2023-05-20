import { Heading } from "../form/Heading"
import { AllContainers } from "../form/Values"
import { TwoColumns } from "../layout/TwoColumns"
import { DayAvailability } from "./DayAvailability"
import { DayCalendar } from "./DayCalendar"

type Props = {
    containers: AllContainers;
}

export const TimePage = (props: Props) => {
    return <div>
        <Heading title="Zeitplan" />
        <TwoColumns left={
            <div>
                <h4 class="text-xl font-bold my-3">Samstag, 26. August</h4>
                <DayAvailability containers={props.containers} day="Samstag" />
                <DayCalendar day="Samstag" />
            </div>
        } right={
            <div>
                <h4 class="text-xl font-bold my-3">Sonntag, 27. August</h4>
                <DayAvailability containers={props.containers} day="Sonntag" />
                <DayCalendar day="Sonntag" />
            </div>
        } />
    </div>
}