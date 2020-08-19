import React, { useState } from 'react'

const Filter = ({onChangeFn}) => {

    return (
    <div>
        filter shown with: <input onChange={e => onChangeFn(e.target.value)}/>
    </div>
    )
  }

  export default Filter