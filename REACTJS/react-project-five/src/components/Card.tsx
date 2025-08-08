import React from 'react'

const Card = (props) => {
  return (
    <div>
      {/* {props.name} */}
      <input type='text' onChange={(e) => props.setName(e.target.value)}></input>
      <br></br>
      Name State variable inside {props.tittle}: {props.name}
    </div>
  )
}

export default Card
