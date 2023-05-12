type Props = {
    label: string;
    hint?: string;
    required?: boolean;
}

export const MailInput = (props: Props) => {
    return <div class="form-control">
        <label class="label">
            <span class="label-text">{props.label}</span>
            {/* <span class="label-text-alt">Top Right label</span> */}
        </label>
        <input type="mail" placeholder="" class="input input-bordered" required={props.required} />
        {props.hint?.trim().length > 0 && (
            <label class="label">
                <span class="label-text-alt">{props.hint}</span>
                {/* <span class="label-text-alt">Bottom Right label</span> */}
            </label>
        )}
    </div>
}