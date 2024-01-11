import RowComponents from "./RowComponents"

export default function TableComponent (props) {
    return (
        <table width={1800}>
            <caption>Photos of </caption>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Image description</th>
                    <th>Photographer</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(single => <RowComponents key={single.id} image = {single} /> )}
            </tbody>
        </table>
    )
} 