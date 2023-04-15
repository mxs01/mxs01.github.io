import  './skill.scss'

function addClassName(props){
    if (props.level === 'Beginner'){
        return "beginner"
    }else if(props.level === 'Intermediate'){
        return "intermediate"
    }else if(props.level === 'Advanced'){
        return "advanced"
    }else{
        return "expert"
    }
}



const Skill = (props) => {
    return (
        <div className={"skill__container"}>
            <h2 className={"skill__name"}>{props.language}</h2>
            <div className={`${"skill__level__container"} ${addClassName(props)}`}>
                <div className={`${"skill__checkpoint"} ${(props.level ==='Beginner'||props.level ==='Intermediate' || props.level ==='Advanced'||props.level ==='Expert') ? "beginner":''}`}><p>Beginner</p></div>
                <div className={`${"skill__checkpoint"} ${(props.level ==='Intermediate' || props.level ==='Advanced'||props.level ==='Expert') ? "intermediate":''}`}><p>Intermediate</p></div>
                <div className={`${"skill__checkpoint"} ${(props.level ==='Advanced'||props.level ==='Expert') ? "advanced":''}`}><p>Advanced</p></div>
                <div className={`${"skill__checkpoint"} ${(props.level ==='Expert') ? "expert":''}`}><p>Expert</p></div>
            </div>
        </div>
    );
}

export default Skill