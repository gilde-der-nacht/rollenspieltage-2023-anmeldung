import { For, Match, Switch } from "solid-js"
import { Page, PageLabel, UserInput } from "./state"
import { TriggerEvent } from "./form/Values"
import { Button } from "./common/Button";
import { useModal } from "./common/Modal";

type Props = {
  pages: readonly Page[];
  activePage: PageLabel;
  triggerEvent: TriggerEvent;
  userInput: UserInput;
}

const { Modal, ModalButton, closeModal } = useModal("save");

export const Nav = (props: Props) => {
  return <div class="py-4 xNavWrapper">
    <div class="flex bg-neutral text-primary-content p-3 place-content-center gap-6 justify-between items-center">
      <ul class="steps steps-vertical md:steps-horizontal">
        <For each={props.pages}>
          {(page) => (
            <Switch fallback={
              <li class="step cursor-pointer" data-content="?" onClick={() => props.triggerEvent(["ChangeSite", page.label])}>{page.label}</li>
            }>
              <Match when={page.label === props.activePage}>
                <li class="step step-primary" data-content={page.label === props.activePage && page.done(props.userInput) ? '✓' : '●'}>{page.label}</li>
              </Match>
              <Match when={page.done(props.userInput)}>
                <li class="step step-success cursor-pointer" data-content="✓" onClick={() => props.triggerEvent(["ChangeSite", page.label])}>{page.label}</li>
              </Match>
            </Switch>
          )}
        </For>
      </ul>
      <ModalButton>Speichern</ModalButton>
    </div>
    <Modal>
      <div class="prose">
        <h2>Anmeldung gespeichert</h2>
        <p>Solange die Anmeldung noch offen ist, kannst du deine Daten unter <strong>www.someurl.com/deineId</strong> weiterhin bearbeiten. Denke daran die Abmeldung rechtzeitig abzuschliessen.</p>
        <Button onClick={closeModal}>Verstanden</Button>
      </div>
    </Modal>
  </div>
}