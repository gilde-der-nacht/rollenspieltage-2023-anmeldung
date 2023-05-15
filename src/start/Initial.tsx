import { JSXElement } from "solid-js";
import { Heading } from "../form/Heading";
import { TextInput } from "../form/TextInput";
import { MailInput } from "../form/MailInput";
import { Alert } from "../common/Alert";
import { Container, TriggerEvent } from "../form/Values";
import { Button } from "../common/Button";

type Props = {
    name: Container<string>;
    mail: Container<string>;
    phone: Container<string>;
    triggerEvent: TriggerEvent;
}

export const Initial = (props: Props): JSXElement => {
    const startRegistration = () => {
        if (props.name.val().trim().length > 0 && props.mail.val().trim().length > 0) {
            props.triggerEvent("StartRegistration");
        }
    }
    return <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse gap-6">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Anmelden</h1>
                <p class="py-6">Melde dich jetzt für die Luzerner Rollenspieltage 2023 an.</p>
                <small>Interne Notiz: Nach dem Ausfüllen dieses Formulars wird bereits ein Eintrag bei uns gemacht, damit wir nachfragen können, falls die Anmeldung nicht abgeschlossen wurde.</small>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form onSubmit={startRegistration}>
                        <TextInput label="Name *" required={true} hint="Pflichtfeld" value={props.name} />
                        <MailInput label="E-Mail-Adresse *" required={true} hint="Pflichtfeld" value={props.mail} />
                        <TextInput label="Telefonnummer" hint="Optional" value={props.phone} />
                        <Button onClick={startRegistration}>Anmeldung beginnen</Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
}