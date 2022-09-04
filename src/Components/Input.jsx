import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Input = styled(Form.Control)`
    border: 0;
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    border-radius: 0;
`

const Buttons = styled.div`
    margin: 20px 0;
    width: 100%;
    button {
        width: 50%;
        border-radius: 0;
        &:first-child {
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-right: 1px #043a89 solid;
        }
        &:last-child {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border-left: 1px #043a89 solid;
        }
    }
`

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

    const shareLink = () => {
        window.location.href = "#"+btoa(JSON.stringify(list))
    }

    return (
        <>
            <Input
                placeholder='e.g. Do the dishes'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Buttons>
                <Button onClick={handleKeyDown}>Add</Button>
                <Button onClick={shareLink}>Share</Button>
            </Buttons>
            
        </>
    );
}

export default ToDoInput