import { Show, getListener } from "solid-js";
import { Heading } from "../form/Heading"
import { AllContainers, Container, isEmptyString } from "../form/Values"
import { PeopleList } from "../start/PeopleList";
import { Alert } from "../common/Alert";

type Props = {
    containers: AllContainers;
}

export const SummaryPage = (props: Props) => {
    return <div class="grid gap-6">
        <Heading title="Zusammenfassung und Abschliessen" description="Kontrolliere dein Daten und schliesse die Anmeldung ab. Auch nach dem Abschluss kannst du noch Korrekturen vornehmen." />
        <div class="prose">
            <h3>Personen</h3>
            <Show when={nameOrMailMissing(props.containers.cc)}>
                <Alert kind="error" text="Wir benötigen mindestens deinen Namen und deine E-Mail-Adresse." />
            </Show>
            <ul>
                <li>
                    <strong>
                        {props.containers.cc.name.val() || "[Name fehlt]"}
                    </strong>
                    <span class="ml-3">({props.containers.cc.age.val()})</span>
                    <br />
                    <span>
                        {props.containers.cc.mail.val() || "[E-Mail fehlt]"}
                        <Show when={props.containers.cc.phone.val()}>{(p) => (", " + p)}</Show>
                    </span>
                </li>
                <Show when={props.containers.f1.name.val()}>
                    {(n) => <li>
                        <strong>
                            {n}
                        </strong>
                        <span class="ml-3">({props.containers.f1.age.val()})</span>
                    </li>}
                </Show>
                <Show when={props.containers.f2.name.val()}>
                    {(n) => <li>
                        <strong>
                            {n}
                        </strong>
                        <span class="ml-3">({props.containers.f2.age.val()})</span>
                    </li>}
                </Show>
            </ul>
            <Show when={props.containers.cc.help.val()}>Ja, ich bin bereit zu helfen.</Show>
        </div>
    </div>
}


const nameOrMailMissing = (cc: { name: Container<string>, mail: Container<string> }): boolean => {
    return isEmptyString(cc.name.val()) || isEmptyString(cc.mail.val());
}