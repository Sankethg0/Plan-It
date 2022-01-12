import React,{useState,useEffect,useRef} from 'react'

function TodoForms(props) {
    const [input,setInput]=useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange=e=>{
        setInput(e.target.value);
    }

    const handleSubmit=e=>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
          });
          setInput('');
    };


    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit?(
                <>
           <input
            placeholder='Add Todo'
            value={input}
            name='text'
            className='todo-input edit'
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='todo-button edit' onClick={handleSubmit}>
            ADD
          </button>
          </>
            ):(
                <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
            )}
        </form>
    );
}

export default TodoForms;
