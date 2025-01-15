import { useState } from "react"

export default function ZombieFighters({money, inTeam, addFighter}) {

    const [zombieFighters, setZombieFighters] = useState(
        [
          {
            id: 1,
            name: 'Survivor',
            price: 12,
            strength: 6,
            agility: 4,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
          },
          {
            id: 2,
            name: 'Scavenger',
            price: 10,
            strength: 5,
            agility: 5,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
          },
          {
            id: 3,
            name: 'Shadow',
            price: 18,
            strength: 7,
            agility: 8,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
          },
          {
            id: 4,
            name: 'Tracker',
            price: 14,
            strength: 7,
            agility: 6,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
          },
          {
            id: 5,
            name: 'Sharpshooter',
            price: 20,
            strength: 6,
            agility: 8,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
          },
          {
            id: 6,
            name: 'Medic',
            price: 15,
            strength: 5,
            agility: 7,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
          },
          {
            id: 7,
            name: 'Engineer',
            price: 16,
            strength: 6,
            agility: 5,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
          },
          {
            id: 8,
            name: 'Brawler',
            price: 11,
            strength: 8,
            agility: 3,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
          },
          {
            id: 9,
            name: 'Infiltrator',
            price: 17,
            strength: 5,
            agility: 9,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
          },
          {
            id: 10,
            name: 'Leader',
            price: 22,
            strength: 7,
            agility: 6,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
          },
        ])
    
        
    return(
        <div className="fighters">
        {zombieFighters.filter(fighter => !inTeam(fighter.id)).map((fighter) => (
        <ul className="character" key={fighter.name}>
            <img src ={fighter.img}/>
            <p><strong>{fighter.name}</strong></p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => addFighter(fighter)} disabled={money < fighter.price}>Add</button>
        </ul>))}
        </div>

)}

//Notes: if inTeam(fighter.id) returns true, then .filter(fighter => !true) becomes .filter(fighter => false) and fighter is removed from the array