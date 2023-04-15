import classes from './project.module.css'

const Project = (props) =>{
    return (
        <div className={`${classes.project__container}`}>
            <h2 className={classes.project__title}>{props.title}</h2>
            <ul className={classes.project__informations}>
                <li className={`${classes.project__information} ${classes.project__language}`}><h3 className={classes.project__information__descr}>Language:</h3><p className={classes.project__information__info}>{props.language}</p></li>
                <li className={`${classes.project__information} ${classes.project__description}`}><h3 className={classes.project__information__descr}>Information:</h3><p className={classes.project__information__info}>{props.description}</p></li>
                <li className={`${classes.project__information} ${classes.project__link}`}><h3 className={classes.project__information__descr}>Details:</h3><p className={classes.project__information__info}><button className={classes.project__information__link__button} onClick={props.openModal}>Details</button></p></li>
            </ul>
        </div>
    );
}

export default Project;