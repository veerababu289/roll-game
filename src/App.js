import React,{useEffect, useState} from 'react'
import './App.css'
import Persons from './Persons'
const App = () => {
  const[cs1,setCs1] = useState(0)
  const [cs2,setCs2] = useState(0)
  const [ran,setRan] = useState(0)
  const [tot1,setTot1] = useState(0)
  const [tot2,setTot2] = useState(0)
  const [con1,setCon1] = useState(true)
  const [con2,setCon2] = useState(false)
  const [buttonn,setButtonn] = useState(false)
  var random = () => {
    var ran1 = Math.floor(Math.random()*(6))+1
    setRan(ran1)
    if (con1){
    var xy = cs1 + ran1
    setCs1(xy)
     if (ran1 === 6) {
      setCon1(false)
      setCon2(true)
      setCs1(0)
     }
    }
    if (con2){
      var yz = cs2 + ran1
      setCs2(yz)
      if (ran1 === 6){
        setCon2(false)
        setCon1(true)
        setCs2(0)
      }
    }
}


  if (con1){
  var onhold = ()=> {
    var tum1 = cs1 + tot1
    setTot1(tum1)
    setCs1(0)
    setCon1(false)
    setCon2(true)
  }
}
else{
  onhold = ()=> {
    var tum2 = cs2 + tot2
    setTot2(tum2)
    setCs2(0)
    setCon2(false)
    setCon1(true)
  }
 }
 useEffect(()=> {
  if (tot1>=30){
    setButtonn(true)
    alert("Person1 Wins!!!")
   }
   if (tot2>=30){
    setButtonn(true)
    alert("Person2 Wins!!!")
   }
 })


  return (
    <div id = "bdiv">
       <div id = "div1" style={{backgroundColor:con1?'green':'skyblue'}}>
        <Persons  playerName={"Person 1"}  currentScore={cs1} totalScore={tot1}/>
       </div>
          <div id = "div2">
          <center>
          <br/><br/><br/>
          <h1>Number : {ran}</h1><br/><br/><br/>
          <button onClick={onhold}>Hold</button><br/><br/>
          <button onClick={random} disabled={buttonn}>Roll</button>
          </center>
       </div>
       <div id = "div3" style={{backgroundColor:con2?'green':'skyblue'}}>
        <Persons   playerName={"Person 2"} currentScore={cs2} totalScore={tot2} />
       </div>
    </div>
  )
}

export default App