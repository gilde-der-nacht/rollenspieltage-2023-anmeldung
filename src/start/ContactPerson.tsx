import { Alert } from "../common/Alert"
import { Heading } from "../form/Heading"
import { MailInput } from "../form/MailInput"
import { TextInput } from "../form/TextInput"
import { Container } from "../form/Values"

export type ContactProps = {
    name: Container<string>;
    mail: Container<string>;
    phone: Container<string>;
}

export const ContactPerson = (props: ContactProps) => {
    return <div class="grid gap-5">
        <Heading title="Kontaktperson" description="Bitte gib uns deinen Namen und E-Mail-Adresse an, damit wir dir ein persönliches Programm zusammenstellen können." />
        <TextInput label="Name *" required={true} hint="Pflichtfeld" value={props.name} />
        <MailInput label="E-Mail-Adresse *" required={true} hint="Pflichtfeld" value={props.mail} />
        <Alert kind="info" text="Per Telefon können wir dich am Event spontan erreichen, sollte z.B. eine Spielrunde ausfallen." />
        <TextInput label="Telefonnummer" hint="Optional" value={props.phone} />
    </div>
}