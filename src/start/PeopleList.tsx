import { Card } from "../common/Card";
import { Heading } from "../form/Heading"
import { Container } from "../form/Values";

export type PeopleListProps = {
    name: Container<string>;
    friend01: Container<string>;
    friend02: Container<string>;
}

export const PeopleList = (props: PeopleListProps) => {
    return <div class="grid gap-4">
        <Heading title="Anmeldung als Gruppe" description="Hier hast du die Möglichkeit bis zu zwei weitere Personen anzumelden, die dasselbe Programm erhalten werden wie du." />
        <Card content={props.name.val()} />
    </div>
}