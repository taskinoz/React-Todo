import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const Empty = styled.div`
  margin: 0;
  font-size: 20px;
`

const List = styled.div`
  padding: 20px 0;
  margin: 20px 0;
  .list-item {
    background-color: #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    .form-check {
      font-size: 30px;
    }
  }
`

const ListChecked = styled(Form.Check)`
  width: 100%;
  text-align: left;
  label {
    ${props => props.ischecked && 'text-decoration: line-through;'}
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
          <Empty>You're list is Empty</Empty>
        </div>
      }
      {list.length > 0 && list.map((item, index) =>
        <div
          key={index}
          className="list-item"
          //onClick={() => updateList(item, index, false, !item.checked)}
        >
          <Form.Group className="d-flex w-100 justify-content-between align-items-center">
            <ListChecked
              className='ml-auto'
              id={'item-'+index}
              type='checkbox'
              label={item.value}
              checked={item.checked}
              ischecked={item.checked}
              onChange={(e) => updateList(item, index, false, e.target.checked)}
            />
            <span
              //className="ml-3"
              onClick={() => updateList(item, index, true)}
            >
              <FontAwesomeIcon icon={faTimes} size='2x' />
            </span>
          </Form.Group>
          
        </div>  
      )}
    </List>
    
  );
}

export default ToDoList