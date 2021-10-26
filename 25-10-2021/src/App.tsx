import { FC, ChangeEvent, useState } from 'react';
import './App.css';
import ListItem from './components/ListItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [editing, setEditing] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  }
  const addTask = (): void => {
    if(task===""){
      toast("Input can not be empty");
    }
    else{
      setList([...list, task])
      setTask("");
    }
   
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
    if(task===""){
      toast("Input can not be empty");
    }
    else{
      list[index] = task
      setList(list);
      setTask("");
      setEditing(false)
    }
  }
  return (
    <>
      <div className="App">
      <ToastContainer />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 400,
              height: 128,
            },
          }}
        >
          <Paper elevation={3}>
            <div className="input">
              <TextField id="outlined-basic" label="Enter Task" value={task} onChange={handleChange} variant="standard" required />
              {editing ?
                <Button className="Btn" variant="contained" onClick={save}>save changes</Button> :
                <Button className="Btn" variant="contained" onClick={addTask}>Add Task</Button>}
            </div>
          </Paper>
        </Box>
        {list.map((item: string, key: number) => {
          return <ListItem key={key} item={item} deleteTask={deleteTask} editTask={editTask} />;
        })}
      </div>

    </>
  );
}

export default App;
