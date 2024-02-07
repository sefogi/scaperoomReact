import {ChangeEvent, FormEvent, useState} from 'react'

type Props = unknown

export function ToDoForm(props: Props) {
    const[input,setInput] = useState<string>('');
    const handleSubmit =(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setInput('');
    }
    const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
    }

  return (
    <form onSubmit={handleSubmit} className='toDo-form' aria-labelledby="toDo-form">
        <input onChange={handleChange } type ='text' placeholder='add a to do' value={input} name ='text'className='toDo-input'/>
        
        <button className='toDo-button'>Add somethiing to do</button>
        </form>
  )
}

export default ToDoForm