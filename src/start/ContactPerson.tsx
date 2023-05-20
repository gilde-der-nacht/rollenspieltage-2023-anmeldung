import { Alert } from "../common/Alert"
import { Heading } from "../form/Heading"
import { MailInput } from "../form/MailInput"
import { TextInput } from "../form/TextInput"
import { ComplexContainer } from "../form/Values"
import { ContactUser } from "../state"
import { AgeGroupSwitch } from "./AgeGroupSwitch"
import { Availability } from "./Availability"
import { Help } from "./Help"

export type ContactProps = {
    contact: ComplexContainer<ContactUser>;
}

export const ContactPerson = (props: ContactProps) => {
    return <div class="grid gap-5">
        <Heading title="Kontaktperson" description="Bitte gib uns deinen Namen und E-Mail-Adresse an, damit wir dir ein persönliches Programm zusammenstellen können." />
        <TextInput label="Name *" required={true} hint="Pflichtfeld" value={props.contact.name} />
        <MailInput label="E-Mail-Adresse *" required={true} hint="Pflichtfeld" value={props.contact.mail} />
        <Alert kind="info" text="Per Telefon können wir dich am Event spontan erreichen, sollte z.B. eine Spielrunde ausfallen." />
        <TextInput label="Telefonnummer" hint="Optional" value={props.contact.phone} />
        <Availability saturday={props.contact.saturday} sunday={props.contact.sunday} />
        <AgeGroupSwitch ageGroup={props.contact.age} id="main" />
        <Help isHelping={props.contact.help} />
    </div>
}