import React,{useRef} from 'react'
import "./style.css"
interface Props{
  todo:string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd:(e:React.FormEvent)=>void;
}

const InputFeild:React.FC<Props> = ({todo, setTodo,handleAdd}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit={(e)=>{
      handleAdd(e);
      inputRef.current?.blur()
      }}>
        <input type="input" placeholder='Enter a task' className='input_box'
        value={todo} ref={inputRef}
        
        onChange={(e)=>setTodo(e.target.value)} />
        <button type='submit' className='input__submit'>Go</button>
    </form>
  )
}

export default InputFeild