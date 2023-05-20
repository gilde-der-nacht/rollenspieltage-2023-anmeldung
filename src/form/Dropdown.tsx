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
        <label tabindex="0" class="btn m-1">{props.label}</label>
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