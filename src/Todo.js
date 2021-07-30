import {React, useState} from 'react';
import TodoComp from './TodoComp';


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

const handleDelete = (item) => {
setItems(items.filter(curr => curr !== item));
}

const handleChange = (item) => {
    const index = items.indexOf(item);
    const newItems = [...items];
    newItems[index] = {
        ...item,
        done: !item.done
    };

    setItems(newItems);
}

    return (
       
            <section>
                <header>
                <h1>todos</h1>
            <input placeholder='What needs to be done' value={inputText} onChange={e => setInputText(e.target.value)} onKeyPress={handleKeyPress} />
                </header>

                <section>
                    <input id='toggle-all' type='checkbox' />
                    <label htmlFor='toggle-all'>Completed</label>
                   
                    <ul>
                        {items.map((item => (
                            <TodoComp 
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            onChange={() => handleChange(item)} 
                            onDelete={() => handleDelete(item)}
                            />
                        )))}
                    </ul>
                </section>

            </section>
    );
}