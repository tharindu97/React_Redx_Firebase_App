import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className ="card-content">
    <span className="card-title">Project Title - {id}</span>
                    <p>Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California. It was created through a corporate restructuring of Google on October 2, 2015,</p>
                </div>

                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by The Net Tharindu</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails