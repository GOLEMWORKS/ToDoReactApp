import { useEffect, useState, useRef } from "react";
import { TodoList } from "./TodoList";
import {ITodo} from "../types/data";

const App : React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    const addTodo = () => {
        if(value){
           setTodos([...todos, {
            id: Date.now(),
            title: value,
            complete: false, 
        }])
        setValue(''); 
        }
    }

    return <div>
        <div> 
            <input value={value} onChange={handleChange} ref={inputRef}></input>
            <button onClick={addTodo}>Add</button>
        </div>
        <TodoList items={todos}></TodoList>
    </div>
}

export {App}