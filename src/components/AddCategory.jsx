import React, { useState } from 'react'

const AddCategory = ({ setCategories, categories }) => {

    const [inputValue, setinputValue] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories([inputValue])
    }

    const inputChange = (e) => {
        setinputValue(e.target.value);
    }
    

    return (
        <form className="text-center" onSubmit={ handleSubmit }>
            <input className="form-control" type="text" placeholder="Buscar..." onChange={ inputChange } />
        </form>
    )
}

export default AddCategory