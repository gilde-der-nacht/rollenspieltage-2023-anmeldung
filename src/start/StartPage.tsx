import { WithSidebar } from "../layout/WithSidebar"
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