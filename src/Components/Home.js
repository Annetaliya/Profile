import React from 'react';

const person = {    
        photo: "https://drive.google.com/thumbnail?id=1JeJZkwlAJFPJrrM14ci7Ji_tS8iumrr6",
        name: 'Annette Adhiambo',
        profession: 'Software Engineer',
        skills: {
            skill1: 'web design',
            skill2: 'front-end development'
        }
}


function Home () {
    
    return (
        <div>
            <img src={person.photo} alt='profie'/>
            <p>{person.name}</p>
            <p>{person.profession}</p>
            <ul>
                <li>{person.skills.skill1}</li>
                <li>{person.skills.skill2}</li>
            </ul>
            
        </div>
    )
}
export default Home;