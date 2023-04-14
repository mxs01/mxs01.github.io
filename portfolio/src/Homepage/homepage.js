import classes from './homepage.module.css'
import AnimateLetters from '../Animation/AnimatedLetters/animatedLetters';

import {useEffect, useState} from 'react'
import { ClassNames } from '@emotion/react';

const Homepage = () => {

    const letterClass = useState('text-animate')[0];

    const firstLine = 'Hi I\'m Max,'.split('');
    const secondLine = 'a computer science bachelor student,'.split('');
    const thridLine = 'with a passion for algorithms and coding.'.split('');

    
    
    


    return (
    <div className={classes.homepage__main__container}>
        <div className={classes.homepage__content}>
            <AnimateLetters letterClass={letterClass} strArray={firstLine} index={4}/>
            <AnimateLetters letterClass={letterClass} strArray={secondLine} index={20}/>
            <AnimateLetters letterClass={letterClass} strArray={thridLine} index={60}/>
        </div>
    </div>);
}

export default Homepage;