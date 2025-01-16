import React from 'react';
import './profileLinks.css';

function ProfileLinks() {
    
    return <div className='containers'>
        <p className='intro'>Here are some of my projects</p>
        <div className='parentContainer'>
            
            <div className='proLink'>
                <a href='https://landing-page-i6zw.vercel.app/' target="_blank"  rel="noopener noreferrer">
                    <div className='thumbnail'></div>
                </a>
                
                <a className='anchor' href='https://landing-page-i6zw.vercel.app/' target="_blank"  rel="noopener noreferrer">Sample Landing page</a>
            </div>
            <div className='proLink'>
                <a href='https://659968189ed589e081611c57--jocular-valkyrie-82c7de.netlify.app/' target="_blank"  rel="noopener noreferrer">
                    <div className='thumbnail'></div>

                </a> 
                <a href='https://659968189ed589e081611c57--jocular-valkyrie-82c7de.netlify.app/' target="_blank"  rel="noopener noreferrer">E commerce website</a>
            </div>
            <div className='proLink'>
                <a href='#home'>
                    <div className='thumbnail'></div>
                </a>
                <a href='#home'>Sample dummy project</a>
            </div>
        </div>
        
        
    </div>
}

export default ProfileLinks;