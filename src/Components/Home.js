import React from 'react';
import './home.css'
import { MdComputer } from "react-icons/md";
import { FaFigma } from "react-icons/fa6";

const person = {    
        photo: 'https://lh3.googleusercontent.com/d/1JeJZkwlAJFPJrrM14ci7Ji_tS8iumrr6=s220?authuser=0', 
        name: 'Annette Adhiambo',
        profession: 'Fontend Developer',
        skills: {
            skill1: 'Web design',
            skill2: 'Front-end development'
        }
}


function Home () {
    
    return (
        <div>      
                <div className='title' id='home'>
                    <div className=''>
                        <p className='name'><span>Hello</span> I'm {person.name}</p>
                        <p className='profession'>{person.profession}</p>
                        <p className='header-intro'>I'm a skilled frontend website developer with
                         experience in creating modern and responsive websites</p>
                        
                    </div>
                    <div>
                        <img src={person.photo} alt="profile"/>
                    </div>    
                </div>
               
                <h1 className='skill-intro'>What I do</h1>
                <div className='skill-container'>
                    <div className='skill-container-first'>
                        <MdComputer size={40}/>
                        <p>{person.skills.skill1}</p>    
                    </div>
                    <div className='skill-container-first'>
                        <FaFigma size={40}/>
                        <p>{person.skills.skill2}</p>
                    </div>
                </div>
           
            
        </div>
    )
}
export default Home;