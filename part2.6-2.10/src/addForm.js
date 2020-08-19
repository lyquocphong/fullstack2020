import React, { useState } from 'react'

const AddForm = ({onSubmitFn}) => {

    const [ person, setPerson ] = useState({
        name: '',
        number: ''
    })

    const handleInputChange = e => {
        const newState = { ...person, [e.target.name]: e.target.value };
        setPerson(newState);
    }

    const handleSubmit = () => {
        onSubmitFn(person);
        setPerson({});
    }

    const showAddButon = person.name !== '' && person.number !== '';

    return (
    <>
        <h2>Add a new</h2>
        <form>
            <div>
                name: <input name="name" value={person.name} onChange={handleInputChange}/>
            </div>
            <div>
                age: <input name="number" value={person.number} onChange={handleInputChange}/>
            </div>
            <div>
                { showAddButon && <button type="button" onClick={handleSubmit}>add</button>}
            </div>
        </form>
    </>
    )
  }

  export default AddForm