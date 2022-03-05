import React from 'react'
import '../App.css'
import './Componentcss.css'


export default function Header(){
    return(
        <header className='header '>
            <h1 id='Name'>Kofi Richardson</h1>

            <ul>
                <li>Home</li>
                <li>Resume</li>
            </ul>
        </header>
    )
}