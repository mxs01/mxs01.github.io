import classes from './homepage.module.css'
import AnimateLetters from '../Animation/AnimatedLetters/animatedLetters';

import {useEffect, useState} from 'react'
import { ClassNames } from '@emotion/react';

const Homepage = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const firstLine = 'Hi I\'m Max,'.split('')
    const secondLine = 'a computer science bachelor student, with a passion for algorithms and coding.'.split('');
    
    useEffect(()=>{}
    ,[])


    return (
    <div className={classes.homepage__main__container}>
        <div className={classes.homepage__content}>
            <AnimateLetters letterClass={letterClass} strArray={firstLine} key={4}/>
            <AnimateLetters letterClass={letterClass} strArray={secondLine} key={40}/>
        </div>
    </div>);
}

export default Homepage;