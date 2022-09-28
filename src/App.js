import './App.scss';
import {Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoInput from './Components/Input';
import ToDoList from './Components/List';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [list, setList] = useState([]);

  const saveList = (data) => {
    if (list.length > 0){
        localStorage.setItem('List', JSON.stringify(data));
    }
    console.log("Saved");
    localStorage.setItem('List', JSON.stringify(data));
  }

  const loadList = () => {
      let getList = JSON.parse(localStorage.getItem('List'));
      if (getList) {
        setList(getList);
      }
  }

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
    if (!hash){
      saveList(newList);
    }
    
  }

  useEffect(() => {
    if ( hash && hash.slice(-1) === "=" ) {
      let newlist = JSON.parse(atob(hash.split("#")[1]));
        setList(newlist);
    }
    else if (hash) {
      window.location.href = "/";
    }
    else {
      loadList();
    }
  })

  return (
    <div className="App">
      <Helmet>
        <title>
          {list.length > 0 ? `You have (${list.length}) item${list.length > 1 ? "'s" : ""} on you ToDo List` : 'ToDo List'}
        </title>
      </Helmet>
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
