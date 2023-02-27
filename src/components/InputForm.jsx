import React, {useRef} from 'react';

const InputForm = (props) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.add(inputRef.current.value);
        inputRef.current.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} required type="text" placeholder="Write a new todo"/>
            <button type={'submit'}>Submit</button>
        </form>
    )
}

export default InputForm;