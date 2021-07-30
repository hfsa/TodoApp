import {React, useState} from 'react';

export default function Todo() {
    const [inputText, setInputText] = useState('');
const [items, setItems] = useState([]);

const addItem = (text) => {
    let newItem = {
        id: `${+new Date()}`,
        done: false,
        text
    }

    setItems([...items, newItem]);
    setInputText('');
}

const handleKeyPress = (e) => {
if (e.key === 'Enter') {
    addItem(inputText);
}
}


    return (
        <div>
            <h1>todos</h1>
            <input placeholder='What needs to be done' value={inputText} onChange={e => setInputText(e.target.value)} onKeyPress={handleKeyPress} />
            
        </div>
    );
}