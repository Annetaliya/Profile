import React from 'react';
import './home.css'
import { MdComputer } from "react-icons/md";
import { FaFigma } from "react-icons/fa6";
import Profile from './Images/profile1.JPG'

const person = {    
        photo: Profile, 
        name: 'Annette Adhiambo',
        profession: 'Frontend Developer',
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
                        <img src={person.photo} alt="profile" loading='lazy' className='profileImage'/>
                    </div>    
                </div>
                <div className='parent-stack'>
                    {/* <h1>Tech stack</h1> */}
                    <div className='stack'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Mysql</p>
                        <p>REST API</p>
                        <p>Node js</p>
                        <p>GitHub</p>

                    </div>
                    
                </div>
               
                <p className='skill-intro'>What I do</p>
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