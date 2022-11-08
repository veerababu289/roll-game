import React from 'react'
import './App.css'
const Persons = (props) => {

  return (
    <div> 
       <div>
       <center><h1>{props.playerName}</h1></center> <br/><br/><br/>
       <b>Total score = {props.totalScore} </b>
       <br/><br/><br/>
       <b>Current score = {props.currentScore}</b> 
       </div>
    </div>
  )
}

export default Persons