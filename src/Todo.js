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
                            <li key={item.id}>{item.text}</li>
                        )))}
                    </ul>
                </section>

            </section>
    );
}