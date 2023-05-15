import { For, Match, Switch } from "solid-js"
import { Page } from "./state"

type Props = {
  pages: readonly Page[]
}


export const Nav = (props: Props) => {
  return <div class="py-4 xNavWrapper">
    <div class="flex bg-neutral text-primary-content p-3 place-content-center">
      <ul class="steps steps-vertical lg:steps-horizontal">
        <For each={props.pages}>
          {(page) => (
            <Switch fallback={
              <li class="step" data-content="?">{page.label}</li>
            }>
              <Match when={page.status === "active"}>
                <li class="step step-primary" data-content={page.status === "active" && page.done ? '✓' : '●'}>{page.label}</li>
              </Match>
              <Match when={page.done}>
                <li class="step step-info" data-content="✓">{page.label}</li>
              </Match>
            </Switch>
          )}
        </For >
      </ul>
    </div>
  </div >
}