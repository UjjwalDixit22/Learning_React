import React from 'react'
// import ujjwalImage from '../assets/ud.jpeg'
import './UserCard.css';


const UserCard = (props) => {
  return (
    <div className= 'user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-image' src={props.image} alt={props.name} ></img>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
