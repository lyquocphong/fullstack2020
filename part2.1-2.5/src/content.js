import React from 'react'
import Part from './part'

const Content = ({ parts }) => {
    return (
      parts.map(item => <Part part={item.name} exercise={item.exercises} />)
    );
}

export default Content;