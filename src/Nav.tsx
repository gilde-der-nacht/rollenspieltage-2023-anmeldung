import { For, Match, Switch } from "solid-js"
import { Page } from "./state"
import { TriggerEvent } from "./form/Values"

type Props = {
  pages: readonly Page[]
  triggerEvent: TriggerEvent;
}


export const Nav = (props: Props) => {
  return <div class="py-4 xNavWrapper">
    <div class="flex bg-neutral text-primary-content p-3 place-content-center">
      <ul class="steps steps-vertical lg:steps-horizontal">
        <For each={props.pages}>
          {(page) => (
            <Switch fallback={
              <li class="step cursor-pointer" data-content="?" onClick={() => props.triggerEvent(["ChangeSite", page.label])}>{page.label}</li>
            }>
              <Match when={page.status === "active"}>
                <li class="step step-primary" data-content={page.status === "active" && page.done ? '✓' : '●'}>{page.label}</li>
              </Match>
              <Match when={page.done}>
                <li class="step step-info cursor-pointer" data-content="✓" onClick={() => props.triggerEvent(["ChangeSite", page.label])}>{page.label}</li>
              </Match>
            </Switch>
          )}
        </For >
      </ul>
    </div>
  </div >
}