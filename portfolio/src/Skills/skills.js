import './skills.css'

import Skill from '../Skill/skill';

const Skills = () => {
    let mySkills = [{language:'Java', level:'Advanced'}, 
                    {language:'Python', level:'Advanced'}, 
                    {language:'React', level:'Beginner'},
                    {language:'Git', level:'Beginner'}]

    return (<div className='skills__container'>
        <h1 className='skills__title'>My Skills</h1>
        <div className='skills__element__container'>
            {mySkills.map((obj)=> <Skill language={obj.language} level={obj.level}/>)}
        </div>
    </div>
    );
}

export default Skills;