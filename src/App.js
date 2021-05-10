import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Task from './components/Task';
import Header from './components/Header';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form list={list} setList={setList} />
      {list.map( (task, i) => (<Task index={i} task={task} list={list} setList={setList} />))}
    </div>
  );
}

export default App;
