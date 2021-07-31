import React, { useState } from "react";
export default function TodoComp(props) {


    const [isEditing, setIsEditing] = useState(false);
    const [currentValue, setCurrentValue] = useState("");
    const { id, done, text, onChange, onDelete, onTextChanged } = props;
    const classes = [];
    if (done) {
        classes.push('completed');
    }
    if (isEditing) {
        classes.push('editing');
    }

    const startEditing = (e) => {
        setIsEditing(true);
        setCurrentValue(text);
    }

    const handleTextChange = (e) => {
        if (e.key !== 'Enter') {
            return;
        }

        onTextChanged(currentValue);
        setCurrentValue('');
        setIsEditing(false);
    }


    <div>
        <li onDoubleClick={startEditing}>
            <div>
                <input id={`todo-${id}`} type='checkbox' checked={done} onChange={onChange} />
                <label htmlFor={`todo-${id}`}>{text}</label>
                <button onclick={onDelete}>x</button>
            </div>

            {isEditing && (
                <input value={currentValue}
                onChange={e => setCurrentValue(e.target.value)}
                    onKeyPress={handleTextChange}
                    type='text'
                />
            )}

        </li>
    </div>
}