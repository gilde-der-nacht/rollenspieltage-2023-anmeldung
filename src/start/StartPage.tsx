import { Container } from "../form/Values"
import { WithSidebar } from "../layout/WithSidebar"
import { UserInput } from "../state"
import { ContactPerson, ContactProps } from "./ContactPerson"
import { PeopleList, PeopleListProps } from "./PeopleList"

type Props = ContactProps & PeopleListProps

export const StartPage = (props: Props) => {
    return <>
        <WithSidebar main={
            <ContactPerson name={props.name} mail={props.mail} phone={props.phone} />
        } side={
            <PeopleList name={props.name} friend01={props.friend01} friend02={props.friend02} />
        } />
    </>
}

export const startIsDone = (userInput: UserInput): boolean => {

    return userInput.name.trim().length > 0 && userInput.mail.trim().length > 0;
}