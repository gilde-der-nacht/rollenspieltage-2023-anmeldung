import { Container } from "../form/Values"

type Props = {
    isHelping: Container<boolean>
}

export const Help = (props: Props) => {
    return <div>
        <label class="label">
            <strong>
                <span class="label-text">Helfen</span>
            </strong>
        </label>
        <div class={`cursor-pointer badge badge-ghost badge-lg ${props.isHelping.val() ? 'badge-outline' : ''}`} onClick={() => { props.isHelping.setVal(!props.isHelping.val()) }}>
            <input type="checkbox" checked={props.isHelping.val()} class="checkbox checkbox-xs" />
            <span class="ml-2">Ich bin/Wir sind bereit bei einer Spiellücke maximal 2 Stunden an der Kiosk-Kasse auszuhelfen.</span>
        </div>
    </div >
}