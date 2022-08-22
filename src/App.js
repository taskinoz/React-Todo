import './App.css';
import {Container, Row, Col } from 'react-bootstrap';
import React, {useState} from 'react';
import ToDoInput from './Components/Input';
import ToDoList from './Components/List';

const randChar = (s) => {
  let e = "";
  for (var i = 0; i < s; i++) {
    e += String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
  return e;
}

function App() {
  const [list, setList] = useState({});

  const updateList = ( data, remove = false ) => {
    let newList = {...list};
    if (remove) {
      delete newList[data]
    }
    else {
      newList = {...newList, ...data}
    }
    setList(newList)
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>ToDo</h1>
          </Col>
          <Col>
            <ToDoList 
              list={list}
              updateList={updateList}
            />
          </Col>
          <Col>
          <ToDoInput 
            list={list}
            updateList={updateList}
          />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
