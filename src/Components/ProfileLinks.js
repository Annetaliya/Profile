import React from 'react';
import './profileLinks.css';

function ProfileLinks() {
    return <div className='containers'>
        <p className='intro'>Here are some of my projects</p>
        <div className='parentConatiner'>
            
            <div>
                <a href='https://landing-page-i6zw.vercel.app/' target="_blank">
                    <img src='https://lh3.googleusercontent.com/d/1m-clqocWaseCcEDDoKXn4Q9-jYL1K45K=s220?authuser=0' alt='landing' />
                </a>
                
                <a href='https://landing-page-i6zw.vercel.app/' target="_blank">Sample Landing page</a>
            </div>
            <div>
                <a href='https://659968189ed589e081611c57--jocular-valkyrie-82c7de.netlify.app/' target="_blank" >
                <img src='https://lh3.googleusercontent.com/d/1FPxAUkC4HDTHW4dvyoAiBuO-Up1HDsAj=s220?authuser=0' alt='website' />

                </a> 
                <a href='https://659968189ed589e081611c57--jocular-valkyrie-82c7de.netlify.app/' target="_blank">E commerce website</a>
            </div>
        </div>
        
        
    </div>
}

export default ProfileLinks;