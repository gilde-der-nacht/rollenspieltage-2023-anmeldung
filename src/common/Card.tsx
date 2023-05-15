type Props = {
    content: string;
    remove?: () => void;
}

export const Card = (props: Props) => {
    return <div class="card card-compact bg-neutral shadow-xl">
        <div class="card-body">
            <p>{props.content}</p>
            {props.remove !== undefined && (
                <div class="card-actions justify-end">
                    <button class="btn btn-error" onClick={props.remove}>Entfernen</button>
                </div>
            )}
        </div>
    </div>
}