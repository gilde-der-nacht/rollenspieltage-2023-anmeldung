import { For, Match, Switch } from "solid-js"
import { Page } from "./state"

type Props = {
  pages: readonly Page[]
}


export const Nav = (props: Props) => {
  return <div class="sticky top-0 py-4 xNavWrapper">
    <div class="navbar bg-neutral text-primary-content">
      <div class="btn-group">
        <For each={props.pages}>
          {(page) => (
            <Switch fallback={
              <button class="btn">{page.label}</button>
            }>
              <Match when={page.status === "active"}>
                <button class="btn btn-active">{page.label}</button>
              </Match>
              <Match when={page.status === "disabled"}>
                <div class="tooltip tooltip-info" data-tip={(page as any).reason}>
                  <button class="btn btn-disabled">{page.label}</button>
                </div>
              </Match>
            </Switch>
          )}
        </For >
      </div >
    </div ></div>
}