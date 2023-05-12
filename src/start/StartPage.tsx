import { ContactPerson, ContactProps } from "./ContactPerson"

type Props = ContactProps

export const StartPage = (props: Props) => {
    return <>
        <ContactPerson name={props.name} mail={props.mail} phone={props.phone} />
    </>
}