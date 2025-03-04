import React from 'react'

const ProjectSummary = ({project}) =>{
    return(
        <div className="card z-depth-0 project-summary">
                <span className="card-title">{project.title}</span>
                <p>Posted by the Net Tharindu</p>
                <p className="grey-text">3rd September, 2am</p>
        </div>
    )
}

export default ProjectSummary