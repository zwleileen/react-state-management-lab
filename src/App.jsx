// src/App.jsx
import './App.css'
import { useState } from "react";
import ZombieFighters from './components/ZombieFighters';

const App = () => {
  const [money, setMoney] = useState(100)
  const [team, setTeam] = useState([])

  const totalStrength = () => {
    if (team.length === 0) {
      return 0
    } else {
      return team.reduce((sum, member) => sum + member.strength,0)
    }
  }

  const totalAgility = () => {
    if (team.length === 0) {
      return 0
    } else {
      return team.reduce((sum, member) => sum + member.agility,0)
    }
  }
  
  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength()}</h2>
      <h2>Team Agility: {totalAgility()}</h2>
      <h2>Team</h2>
      {team.length ===0 ? (
        <p>Pick some team members</p>
      ) : (
        <div className="members">
          {team.map((member) => (
            <ul className="member" key={member.id}>
              <img src ={member.img}/>
              <p><strong>{member.name}</strong></p>
              <p>Price: {member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
            </ul>
        ))}
        </div>
      )}
      
      <h2>Fighters</h2>
      <ZombieFighters team={team} setTeam={setTeam} money={money} setMoney={setMoney}/> 
    </>
  );
}

export default App

//Notes: Here, we create the state of team and setTeam, then pass them as props to ZombieFighters i.e. team sends the team array and setTeam sends the function to update the team
//In ZombieFighters, we receive the props using destructuring i.e. function ZombieFighters({team, setTeam})
