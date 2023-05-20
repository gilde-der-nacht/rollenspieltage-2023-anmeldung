import { For } from "solid-js";

export type DropdownItem = {
    label: string;
    onClick: () => void;
}

type Props = {
    label: string;
    items: DropdownItem[]
}

export const Dropdown = (props: Props) => {
    return <div class="dropdown">
        <label tabindex="0" class="btn m-1">{props.label}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="flex-shrink-0 w-6 h-6 stroke-current pl-3" fill="currentColor"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
        </label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <For each={props.items}>
                {(item) => (
                    <li><a onClick={(e) => {
                        item.onClick()
                        setTimeout(() => e.target.closest("ul")?.blur(), 0)
                    }}>{item.label}</a></li>
                )}
            </For>
        </ul>
    </div>
}