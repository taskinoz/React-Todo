import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ToDoInput = ({
    list,
    updateList,
}) => {

    const [input, setInput] = useState();
    
    const handleKeyDown = (event) => {
        console.log(event);
        if (event.key === 'Enter') {
            updateList({ [Object.keys(list).length]: input })
        }
    }

    return (
        <>
            <Form.Control
                placeholder='e.g. Do the dishes'
                value={input}
                onChange={e => setInput(e.target.val)}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={handleKeyDown}>Add</Button>
        </>
    );
}

export default ToDoInput