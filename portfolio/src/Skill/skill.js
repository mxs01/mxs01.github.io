import classes from './skill.module.css'

function addClassName(props){
    if (props.level === 'Beginner'){
        return classes.beginner
    }else if(props.level === 'Intermediate'){
        return classes.intermediate
    }else if(props.level === 'Advanced'){
        return classes.advanced
    }else{
        return classes.expert
    }
}



const Skill = (props) => {
    return (
        <div className={classes.skill__container}>
            <h2 className={classes.skill__name}>{props.language}</h2>
            <div className={`${classes.skill__level__container} ${addClassName(props)}`}>
                <div className={`${classes.skill__checkpoint} ${(props.level ==='Beginner'||props.level ==='Intermediate' || props.level ==='Advanced'||props.level ==='Expert') ? classes.beginner:''}`}><p>Beginner</p></div>
                <div className={`${classes.skill__checkpoint} ${(props.level ==='Intermediate' || props.level ==='Advanced'||props.level ==='Expert') ? classes.intermediate:''}`}><p>Intermediate</p></div>
                <div className={`${classes.skill__checkpoint} ${(props.level ==='Advanced'||props.level ==='Expert') ? classes.advanced:''}`}><p>Advanced</p></div>
                <div className={`${classes.skill__checkpoint} ${(props.level ==='Expert') ? classes.expert:''}`}><p>Expert</p></div>
            </div>
        </div>
    );
}

export default Skill