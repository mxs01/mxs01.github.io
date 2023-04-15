import classes from './skills.module.css'

import Skill from '../Skill/skill';
import Card from '../Card/Card';

const Skills = () => {
    let mySkills = [{language:'Java', level:'Advanced'}, 
                    {language:'Python', level:'Intermediate'}, 
                    {language:'React', level:'Intermediate'},
                    {language:'CSS3', level:'Intermediate'},
                    {language:'Git', level:'Intermediate'}]

    return (
    <div className={classes.skills__container}>
        <Card className={classes.skills__element__container}>
            <h1 className={classes.skills__title}>My Skills</h1>
            {mySkills.map((obj, idx)=> <Skill key={idx} id={idx} language={obj.language} level={obj.level}/>)}
        </Card>
    </div>
    );
}

export default Skills;