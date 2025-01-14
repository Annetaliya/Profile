import React from 'react';
import './home.css'

const person = {    
        photo: "https://drive.google.com/uc?export=view&id=1JeJZkwlAJFPJrrM14ci7Ji_tS8iumrr6",
        name: 'Annette Adhiambo',
        profession: 'Software Engineer',
        skills: {
            skill1: 'Web design',
            skill2: 'Front-end development'
        }
}


function Home () {
    
    return (
        <div>
            <div className='container'>
                <img src={person.photo} alt='profile'/>
                <p className='name'>{person.name}</p>
                <p className='profession'>{person.profession}</p>
                <h1>What I do</h1>
                <ul>
                    <li>{person.skills.skill1}</li>
                    <li>{person.skills.skill2}</li>
                </ul>
            </div>
            
        </div>
    )
}
export default Home;