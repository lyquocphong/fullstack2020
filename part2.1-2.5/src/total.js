import React from 'react'

const Total = ({ parts }) => {

    const total = parts.reduce((total, part) => {
      return total + part.exercises;
    }, 0)
  
    return (
      <b>
        Total of exercises {total}
      </b>
    )
}

export default Total;