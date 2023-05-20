import { Day } from "../state";

type Props = {
    day: Day;
}

export const DayCalendar = (props: Props) => {
    const headerFooter = () => (
        <tr>
            <th>Startzeit</th>
            <th>Programm</th>
            <th>Bemerkung</th>
        </tr>);

    return <div>
        <div class="overflow-x-auto">
            <table class="table table-compact w-full">
                <thead>
                    {headerFooter()}
                </thead>
                <tbody>
                    <tr class="hover">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                    </tr>
                </tbody>
                <tfoot>
                    {headerFooter()}
                </tfoot>
            </table>
        </div>
    </div>
}