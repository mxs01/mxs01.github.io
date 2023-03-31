import './homepage.css'
import AnimateLetters from '../Animation/AnimatedLetters/animatedLetters';

import {useEffect, useState} from 'react'

const Homepage = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const firstLine = 'Hi I\'m Max,'.split('')
    const secondLine = 'a computer science bachelor student, with a passion for algorithms and coding.'.split('');
    
    useEffect(()=>{}
    ,[])


    return (
    <div className='homepage__main-container'>
        <div className='homepage__content'>
            <AnimateLetters letterClass={letterClass} strArray={firstLine} key={4}/>
            <AnimateLetters letterClass={letterClass} strArray={secondLine} key={40}/>
        </div>
    </div>);
}

export default Homepage;