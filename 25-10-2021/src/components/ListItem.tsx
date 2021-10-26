import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TableCell, TableRow } from '@mui/material';
interface Props {
    item: string;
    deleteTask(delItem: string): void
    editTask(edItem: string): void
}
const ListItem = ({ item, deleteTask, editTask }: Props) => {
    return (
        <TableRow>

            <TableCell>{item}</TableCell>
            <TableCell><Button variant="contained" color="secondary" onClick={() => deleteTask(item)}><DeleteIcon /></Button></TableCell>
            <TableCell><Button variant="contained" onClick={() => editTask(item)}><EditIcon /></Button></TableCell>
        </TableRow>
    )
}

export default ListItem
