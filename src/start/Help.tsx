import { Checkbox } from "../form/Checkbox"
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
        <Checkbox label="Ich bin/Wir sind bereit bei einer Spiellücke maximal 2 Stunden an der Kiosk-Kasse auszuhelfen." isChecked={props.isHelping.val} onClick={() => { props.isHelping.setVal(!props.isHelping.val()) }} />
    </div >
}