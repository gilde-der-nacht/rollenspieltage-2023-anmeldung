type Props = {
    id: string;
    label: string;
    isChecked: () => boolean;
    onClick: () => void;
}

export const RadioButton = (props: Props) => {
    return <div
        class={`cursor-pointer badge badge-ghost badge-lg ${props.isChecked() ? 'badge-outline' : ''}`}
        onClick={props.onClick}>
        <input
            type="radio"
            name={props.id}
            class="radio"
            checked={props.isChecked()} />
        <span class="ml-2">{props.label}</span>
    </div>
}