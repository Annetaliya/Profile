import React from 'react';
import './home.css'
import { MdComputer } from "react-icons/md";
import { FaFigma } from "react-icons/fa6";

const person = {    
        photo: 'https://lh3.googleusercontent.com/d/1JeJZkwlAJFPJrrM14ci7Ji_tS8iumrr6=s220?authuser=0', 
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
                
                <div className='title'>
                <div>
                    <img src={person.photo} alt="profile"/>
                </div>
                    <p className='name'>{person.name}</p>
                    <p className='profession'>{person.profession}</p>
                </div>
               
            </div>
            
            <div className='skills'>
                <h1>Skills</h1>
                <ul>
                    <li>{person.skills.skill1}</li>
                    <li>{person.skills.skill2}</li>
                </ul>
                {/* <div className='skill1'>
                    <MdComputer size={50}/>
                    <p>{person.skills.skill1}</p>
                </div> */}
                
            </div>
           
            
        </div>
    )
}
export default Home;