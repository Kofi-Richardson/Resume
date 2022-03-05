import React from 'react'
import './Componentcss.css'

export default function Greetings(){
    return(
        <div className='greetings-body'>
            <div className='Greetings'>
                <h1 id='greetings-bold'>
                    Hello, I am <strong id='kofi'>Kofi Richardson</strong>,<br/>
                     I am a FrontEnd developer
                
                </h1>
            </div>
        </div>
    )
}