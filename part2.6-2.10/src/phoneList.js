import React, { useState } from 'react'

const PhoneList = ({persons}) => {
    return (
    <>
        <h2>Numbers</h2>
        { persons && persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </>
    )
  }

  export default PhoneList