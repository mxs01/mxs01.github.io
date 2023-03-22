import './projects.css'

import Project from '../Project/project';


const Projects = () =>{

    let projects = [
        {   title: 'A* Search Algorithm', 
            language:'Python', 
            information:'I\'ve implemented a GUI implementation of the classic A* algorithm with user interaction', 
            link:'github-link'
        },
        {   title: '', 
            language:'Java', 
            information:'', 
            link:'github-link'
        },
        {   title: '', 
            language:'Java', 
            information:'', 
            link:'github-link'
        },
        {   title: '', 
        language:'Java', 
        information:'', 
        link:'github-link'
    }
    ,
        {   title: '', 
            language:'Java', 
            information:'', 
            link:'github-link'
        },
        {   title: '', 
        language:'Java', 
        information:'', 
        link:'github-link'},
        {   title: '', 
        language:'Java', 
        information:'', 
        link:'github-link'}
        
        ]

    return (
        <div className='projects__container'>
            {projects.map((obj) => <Project title={obj.title} language={obj.language} information={obj.information} link={obj.link}/>)}
        </div>
    );
}

export default Projects;