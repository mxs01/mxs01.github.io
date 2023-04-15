import classes from "./NoProjectsAvailable.module.css"

import Card from "../Card/Card";

const NoProjectsAvailable = () => {
    return <div className={classes.not__available__container}>
        <Card>
            <h1 className={classes.not__available__title}>No projects available</h1>
            <p className={classes.not__available__text}>I'm currently working on some new cool projects</p>
        </Card>

    </div>
}

export default NoProjectsAvailable;