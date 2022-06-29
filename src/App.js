import './App.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import React, {useState} from 'react';

function randChar(s) {
  let e = "";
  for (var i = 0; i < s; i++) {
    e += String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
  return e;
}

const ToDoList = (
  list
) => {
  return (
    <>
      {JSON.stringify(list)}
    </>
  );
}

function App() {
  const [list, updateList] = useState({});
  const [input, updateInput] = useState({ val: ""});
  function addtolist(e) {
    let newList = list
    
    //updateList()
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
            />
          </Col>
          <Col>
            <Form.Control
              placeholder='e.g. Do the dishes'
              value={input.val}
              onChange={e => updateInput({ val: e.target.value })}
            />
            <Button onClick={() => addtolist(input)}>Add</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
