import './App.css';
import {Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  const [list, setList] = useState([]);

  const updateList = ( data, index, remove = false, checked = null) => {
    let newList = [...list];
    if (remove) newList.splice(index, remove);
    if (!remove && checked===null) {
      newList.splice(index, remove, data);
    }
    if (!remove && checked!==null) {
      newList[index].checked = checked;
    }
    setList(newList)
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12}>
            <h1>ToDo</h1>
          </Col>
          <Col md={12}>
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
