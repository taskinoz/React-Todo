import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ToDoInput = ({
    list,
    updateList,
}) => {

    const [input, setInput] = useState("");
    
    const handleKeyDown = (event) => {
        console.log(event);
        if (event.key === 'Enter' || event.type === 'click') {
            console.log(input);
            updateList({ [Object.keys(list).length]: input })
            setInput("");
        }
    }

    return (
        <>
            <Form.Control
                placeholder='e.g. Do the dishes'
                value={input}
                onChange={(e) => {console.log(e.target.value); setInput(e.target.value)}}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={handleKeyDown}>Add</Button>
        </>
    );
}

export default ToDoInput