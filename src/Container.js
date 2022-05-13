import React from 'react'

export const Container = ({details}) => {
  return (
    <div>
      <h1>{details.last_name}</h1>
      <h1>{details.first_name}</h1>
    </div>
  )
}