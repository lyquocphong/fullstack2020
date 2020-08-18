import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return (
    <div>
      <p>{ course }</p>
    </div>
  )
}

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    parts.map(item => <Part part={item.part} exercise={item.exercise} />)
  );
}

const Total = ({ total }) => {
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    {
      part: part1, exercise: exercises1
    },
    {
      part: part2, exercise: exercises2
    },
    {
      part: part3, exercise: exercises3
    }
  ];

  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))