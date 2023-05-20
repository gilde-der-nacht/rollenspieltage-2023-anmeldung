import { AllContainers, isEmptyString, } from "../form/Values"
import { WithSidebar } from "../layout/WithSidebar"
import { UserInput } from "../state"
import { ContactPerson, } from "./ContactPerson"
import { PeopleList } from "./PeopleList"

type Props = {
    containers: AllContainers;
}

export const StartPage = (props: Props) => {
    return <>
        <WithSidebar main={
            <ContactPerson contact={props.containers.cc} />
        } side={
            <PeopleList containers={props.containers} />
        } />
    </>
}

export const startIsDone = (userInput: UserInput): boolean => {

    return !isEmptyString(userInput.contact.name) && !isEmptyString(userInput.contact.mail);
}