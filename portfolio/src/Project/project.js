import './project.css'

const Project = (props) =>{
    return (
        <div className='project__container'>
            <h2 className='project__title'>{props.title}</h2>
            <ul className='project__informations'>
                <li className='project__information project__language'><h3 className='project__information__descr'>Language:</h3><p className='project__information__info'>{props.language}</p></li>
                <li className='project__information project__description'><h3 className='project__information__descr'>Information:</h3><p className='project__information__info'>{props.information}</p></li>
                <li className='project__information project__link'><h3 className='project__information__descr'>GitHub:</h3><p className='project__information__info'><a className='project__information__link__button'href={props.link}>Code</a></p></li>
            </ul>
        </div>
    );
}

export default Project;