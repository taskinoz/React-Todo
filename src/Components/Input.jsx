import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ToDoInput = ({
    list,
    updateList,
}) => {

    const [input, setInput] = useState("");
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.type === 'click') {
            updateList( {
                value: input,
                checked: false,
            }, list.length )
            setInput("");
        }
    }

    return (
        <>
            <Form.Control
                placeholder='e.g. Do the dishes'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={handleKeyDown}>Add</Button>
        </>
    );
}

export default ToDoInput