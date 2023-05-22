import { Show, Switch, getListener } from "solid-js";
import { Heading } from "../form/Heading"
import { AllContainers, ComplexContainer, Container, isEmptyString } from "../form/Values"
import { PeopleList } from "../start/PeopleList";
import { Alert } from "../common/Alert";
import { ContactUser, Master, TimeWindow } from "../state";
import { rangeIsValid } from "../time/timeUtil";
import { TwoColumns } from "../layout/TwoColumns";

type Props = {
    containers: AllContainers;
}

export const SummaryPage = (props: Props) => {
    return <div class="grid gap-6">
        <Heading title="Zusammenfassung und Abschliessen" description="Kontrolliere dein Daten und schliesse die Anmeldung ab. Auch nach dem Abschluss kannst du noch Korrekturen vornehmen." />
        <TwoColumns left={
            <div class="prose grid gap-6">
                <div>
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
                    <Show when={props.containers.cc.help.val()}>
                        <ul><li>
                            Ja, ich bin bereit zu helfen.
                        </li></ul>
                    </Show>
                </div>
            </div>
        } right={
            <div class="prose grid gap-6">
                <div>
                    <h3>Zeit</h3>
                    <Show when={!noDayIsSelected(props.containers.cc)} fallback={
                        <Alert kind="error" text="Wähle mindestens Samstag oder Sonntag aus." />
                    }>
                        <ul>
                            <Show when={props.containers.cc.saturday.val()}>
                                <Show when={!timeIsMissingSa(props.containers.cc, props.containers.time)} fallback={
                                    <Alert kind="error" text="Die gewählte Zeit für Samstag ist ungültig." />
                                }>
                                    <li>
                                        <strong>Samstag, </strong>von {props.containers.time.Samstag.val().start} bis {props.containers.time.Samstag.val().end}
                                    </li>
                                </Show>
                            </Show>
                            <Show when={props.containers.cc.sunday.val()}>
                                <Show when={!timeIsMissingSo(props.containers.cc, props.containers.time)} fallback={
                                    <Alert kind="error" text="Die gewählte Zeit für Sonntag ist ungültig." />
                                }>
                                    <li>
                                        <strong>Sonntag, </strong>von {props.containers.time.Sonntag.val().start} bis {props.containers.time.Sonntag.val().end}
                                    </li>
                                </Show>
                            </Show>
                        </ul>
                    </Show>
                </div>
            </div>
        } />
        <Show when={props.containers.play.wantsToPlay.val()}>
            <div class="prose">
                <h3>Spielen</h3>
                <ul>
                    <li>Ja, ich möchte gerne als Spieler:in teilnehmen.</li>
                    <Show when={props.containers.play.playLength.val() !== "Keine Angabe"}>
                        <li>{props.containers.play.playLength.val()}</li>
                    </Show>
                    <Show when={props.containers.play.genres.val().length > 0}>
                        <li>Genres, die du <strong>nicht</strong> magst: {props.containers.play.genres.val().join(", ")}</li>
                    </Show>
                </ul>
            </div>
        </Show>
        <Show when={props.containers.master.wantsToMaster.val()}>
            <div class="prose">
                <h3>Spielleiten</h3>
                <ul>
                    <li>Ja, ich möchte gerne als Spielleiter:in teilnehmen.</li>
                    <Show when={!gameRoundsAreMissing(props.containers.master)} fallback={
                        <Alert kind="error" text="Bitte erfasse mindestens eine Spielrunde." />
                    }>
                        <li>Meine Spielrunden: {props.containers.master.gameRounds.val().map(gr => gr.title + " (" + gr.system + ")").join(", ")}</li>
                    </Show>
                </ul>
            </div>
        </Show>
    </div>
}


const nameOrMailMissing = (cc: ComplexContainer<ContactUser>): boolean => {
    return isEmptyString(cc.name.val()) || isEmptyString(cc.mail.val());
}

const noDayIsSelected = (cc: ComplexContainer<ContactUser>): boolean => {
    return !cc.saturday.val() && !cc.sunday.val();
}

const timeIsMissingSa = (cc: ComplexContainer<ContactUser>, time: ComplexContainer<TimeWindow>): boolean => {
    if (!cc.saturday.val()) {
        return false;
    }
    try {
        return !rangeIsValid(time.Samstag.val().start, time.Samstag.val().end);
    } catch (_) {
        return true
    }
}

const timeIsMissingSo = (cc: ComplexContainer<ContactUser>, time: ComplexContainer<TimeWindow>): boolean => {
    if (!cc.sunday.val()) {
        return false;
    }
    try {
        return !rangeIsValid(time.Sonntag.val().start, time.Sonntag.val().end);
    } catch (_) {
        return true
    }
}

const gameRoundsAreMissing = (master: ComplexContainer<Master>): boolean => {
    if (!master.wantsToMaster.val()) {
        return false;
    }
    return master.gameRounds.val().length === 0;
}