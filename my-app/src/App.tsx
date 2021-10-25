import { FC, ChangeEvent, useState } from 'react';
import './App.css';
import ListItem from './components/ListItem';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [editing, setEditing] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  }
  const addTask = (): void => {
    setList([...list, task])
    setTask("");
  }
  const deleteTask = (delItem: string): void => {
    setList(list.filter((item) => { return item !== delItem }))
  }
  const editTask = (edItem: string): void => {
    setIndex(list.indexOf(edItem))
    setEditing(true)
    setTask(edItem);
  }
  const save = (): void => {
    list[index] = task
    setList(list);
    setTask("");
    setEditing(false)
  }
  return (
    <>
      <div>
        <input type="text" placeholder="enter task" value={task} onChange={handleChange} />
        {editing ? <button onClick={save}>save changes</button> :
          <button onClick={addTask}>add task</button>}
      </div>
      <div>
        {list.map((item: string, key: number) => {
          return <ListItem key={key} item={item} deleteTask={deleteTask} editTask={editTask} />;
        })}
      </div>

    </>
  );
}

export default App;
