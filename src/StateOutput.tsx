import { UserInput } from "./state"

type Props = {
    obj: UserInput
}

export const StateOutput = (props: Props) => {
    return <div class="mockup-code">
        {Object.entries(props.obj).map(([key, value]) => (
            <pre><code>{JSON.stringify(key)}:{JSON.stringify(value)}</code></pre>
        ))}
    </div>
}