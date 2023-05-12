import { Alert } from "../common/Alert"
import { Heading } from "../form/Heading"
import { MailInput } from "../form/MailInput"
import { TextInput } from "../form/TextInput"

export const ContactPerson = () => {
    return <div class="grid gap-5">
        <Heading title="Kontaktperson" description="Bitte gib uns deinen Namen und E-Mail-Adresse an, damit wir dir ein persönliches Programm zusammenstellen können." />
        <TextInput label="Name *" required={true} hint="Pflichtfeld" />
        <MailInput label="E-Mail-Adresse *" required={true} hint="Pflichtfeld" />
        <Alert kind="info" text="Per Telefon können wir dich am Event spontan erreichen, sollte z.B. eine Spielrunde ausfallen." />
        <TextInput label="Telefonnummer" hint="Optional" />
    </div>
}