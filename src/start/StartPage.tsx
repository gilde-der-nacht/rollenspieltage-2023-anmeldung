import { Alert } from "../common/Alert"
import { Heading } from "../form/Heading"
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
            <>
                <Heading title="Anmeldung als Gruppe" description="Hier hast du die Möglichkeit bis zu zwei weitere Personen anzumelden, die dasselbe Programm erhalten werden wie du." />
                <PeopleList containers={props.containers} />
            </>
        } />
        <div class="mt-6">
            <Alert kind="info" text="Die Kontaktdaten werden ausschliesslich verwendet, um dir die notwendigen Informationen zu den Luzerner Rollenspieltage 2023 zu senden. Möchtest du gerne darüber hinaus über Spielevents von uns informiert werden, dann trage dich am besten für unseren Newsletter ein: https://rollenspieltage.ch/newsletter/" />
        </div>
    </>
}

export const startIsDone = (userInput: UserInput): boolean => {

    return !isEmptyString(userInput.contact.name) && !isEmptyString(userInput.contact.mail);
}