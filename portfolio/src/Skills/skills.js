import './skills.css'

import Skill from '../Skill/skill';
import Card from '../Card/Card';

const Skills = () => {
    let mySkills = [{language:'Java', level:'Advanced'}, 
                    {language:'Python', level:'Intermediate'}, 
                    {language:'React', level:'Intermediate'},
                    {language:'CSS3', level:'Intermediate'},
                    {language:'Git', level:'Beginner'}]

    return (
    <div className='skills__container'>
        <Card className='skills__element__container'>
            <h1 className='skills__title'>My Skills</h1>
            {mySkills.map((obj)=> <Skill language={obj.language} level={obj.level}/>)}
        </Card>
    </div>
    );
}

export default Skills;