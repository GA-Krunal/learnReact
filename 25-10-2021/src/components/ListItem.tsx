interface Props {
    item: string;
    deleteTask(delItem: string): void
    editTask(edItem: string): void
}
const ListItem = ({ item, deleteTask, editTask }: Props) => {
    return (
        <>
            <h2>{item}</h2>
            <button onClick={() => deleteTask(item)}>delete</button>
            <button onClick={() => editTask(item)}>edit</button>
        </>
    )
}

export default ListItem
