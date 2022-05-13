import './App.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import React, {useState} from 'react';

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
            <Button onClick={addtolist}>Add</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
