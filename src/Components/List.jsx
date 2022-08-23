import { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const List = styled.div`
  
`

const ListChecked = styled(Form.Check)`
  ${props => props.isChecked && 'label {text-decoration: line-through;}'}
`

const ToDoList = ({
    list,
    updateList,
}) => {
  const listItems = Object.keys(list);
  const [ticked, setTicked] = useState([])

  const updateTicked = (item, index, remove=false) => {
    let newList = [...ticked];
    remove ? newList.splice(index, remove) : newList.splice(index, remove, item);
    setTicked(newList);
  }

  return (
    <List>
      {listItems === 0 && 
        <div className="empty">
          <p>List Empty</p>
        </div>
      }
      {listItems.length > 0 && listItems.map((item, index) =>
        <div className="list-item">
          <ListChecked
            type='checkbox'
            label={list[item]}
            onChange={(e) => updateTicked(item, index, e.target.checked)}
            isChecked={ticked.includes(item)}
          />
          <span onClick={() => {
            updateList(item,true);
            updateTicked(item, index, true);
          }}>x</span>
        </div>  
      )}
    </List>
    
  );
}

export default ToDoList