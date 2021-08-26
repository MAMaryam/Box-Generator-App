import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Box from './components/Box';


function App() {
  const [boxes, setBoxes] = useState([]);
  const [form, setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(form);
    setBoxes([...boxes, form])
    setForm("");
  }
  const onDeleteHandler = (index) => {
    setBoxes([...boxes.slice(0, index), ...boxes.slice(index+1)])
  }
  return (
    <div className="App">
      <h1 className="jumbotron">Box-Generator</h1>
      <form onSubmit={onSubmitHandler}>
        <input id = "col" className="form-control" placeholder="Add A Color..." type="text" value = {form} name="box" onChange={(event)=>setForm(event.target.value)}/>
        <input type="submit" className = "btn btn-primary" value = "add box"/>
      </form>
        {
          boxes.map((color, key) => {
            return <Box  key= {key} color = {color} index = {key} onDeleteHandler = {onDeleteHandler}/>
          })
        }

    </div>
  );
}

export default App;