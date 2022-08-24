import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const List = styled.div`
  .list-item {
    display: flex;
    flex-direction: row;
    //justify-content: center;
    width: 100%;
  }
`

const ListChecked = styled(Form.Check)`
  label {
    ${props => props.isChecked && 'text-decoration: line-through;'}
  }
`

const ToDoList = ({
    list,
    updateList,
}) => {

  return (
    <List>
      {list.length === 0 && 
        <div className="empty">
          <p>List Empty</p>
        </div>
      }
      {list.length > 0 && list.map((item, index) =>
        <div className="list-item">
          <Form.Group className="w-100">
            <ListChecked
              type='checkbox'
              label={item.value}
              onChange={(e) => updateList(item, index, false, e.target.checked)}
              isChecked={item.checked}
            />
            <span
              //className="ml-3"
              onClick={() => updateList(item, index, true)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </Form.Group>
          
        </div>  
      )}
    </List>
    
  );
}

export default ToDoList