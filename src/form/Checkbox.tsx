type Props = {
    isChecked: () => boolean;
    onClick: () => void;
    label: string;
}

export const Checkbox = (props: Props) => {
    return <div class={`cursor-pointer badge badge-ghost badge-lg ${props.isChecked() ? 'badge-outline' : ''}`} onClick={props.onClick}>
        <input type="checkbox" checked={props.isChecked()} class="checkbox checkbox-xs" />
        <span class="ml-2">{props.label}</span>
    </div>
}