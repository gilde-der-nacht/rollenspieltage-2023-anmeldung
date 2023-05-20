import { For, Match, Switch } from "solid-js"
import { Page, PageLabel, UserInput } from "./state"
import { TriggerEvent } from "./form/Values"

type Props = {
  pages: readonly Page[];
  activePage: PageLabel;
  triggerEvent: TriggerEvent;
  userInput: UserInput;
}


export const Nav = (props: Props) => {
  return <div class="py-4 xNavWrapper">
    <div class="flex bg-neutral text-primary-content p-3 place-content-center">
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
        </For >
      </ul>
    </div>
  </div >
}