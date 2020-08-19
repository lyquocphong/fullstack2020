import React, { useState, useEffect } from 'react'
import Filter from './filterForm'
import AddForm from './addForm'
import PhoneList from './phoneList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ filterTerm, setFilterTerm ] = useState('')
  const [ filteredItem, setFilteredItem ] = useState([]);

  useEffect(() => {
    if (filterTerm.length === 0) {
      setFilteredItem(persons);
      return;
    }

    const newFilteredList = persons.filter(person => person.name.toLowerCase().includes(filterTerm.toLowerCase()));
    setFilteredItem(newFilteredList);
  }, [filterTerm, persons]);

  const handleFilterChange = filterTerm => {
    setFilterTerm(filterTerm);
  }

  const handleAddNew = (newPerson) => {
    const exist = persons.find(person => person.name.localeCompare(newPerson.name) === 0);

    if (exist) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }

    const newPersonsState = [ ...persons, { ...newPerson } ];
    setPersons(newPersonsState);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChangeFn={handleFilterChange} />
      <AddForm onSubmitFn={handleAddNew} />
      <PhoneList persons={filteredItem} />
    </div>
  )
}

export default App