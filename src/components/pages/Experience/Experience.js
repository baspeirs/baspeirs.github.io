import React, { useState } from "react";
import "./Experience.css";
import workHistory from "./workHistory.json";
import education from './education.json';
import { ExpInfoCard } from '../../common/components/ExpInfoCard';
import { ExpandAndCollapse } from "../../common/components/ExpandAndCollapse";

function Experience() {
    const [otherExpToggle, setOtherExpToggle] = useState({
        button: true,
        content: false
    });

    const toggleExp = () => {
        setOtherExpToggle({
            button: !otherExpToggle.button,
            content: !otherExpToggle.content
        });
    }

    return (
        <div id="experience" className="toggle about-block">
            <h2 id="experienceHeader" >Experience</h2>
            <div className='tech-experience'>
                {workHistory[0].map((job, index) => {
                    return <ExpInfoCard
                        key={index}
                        term={job.term}
                        title={job.title}
                        info={job.description}
                    />
                })}
            </div>
            <div className={`${otherExpToggle.button ? 'show' : 'hide'}`}>
                <ExpandAndCollapse
                    type='expand'
                    toggle={toggleExp}
                    text='Additional Work History'
                />
            </div>
            <div className={`${otherExpToggle.content
                    ? 'show'
                    : 'hide'
                    }`}>
                <div className='toggle-other-experience'>
                    <div className='other-experience'>
                    {workHistory[1].map((job, index) => {
                        return <ExpInfoCard
                            key={index}
                            term={job.term}
                            title={job.title}
                            info={job.description}
                        />
                    })}
                    </div>
                    <ExpandAndCollapse
                        type='collapse'
                        toggle={toggleExp}
                        text='Hide Additional Work'
                    />
                </div>
            </div>

            <div className='education'>
                {education.map((edObject, index) => {
                    return <ExpInfoCard
                        key={index}
                        term={edObject.term}
                        title={edObject.school}
                        info={edObject.completion}
                    />
                })}
            </div>
        </div >
    )
}

export default Experience;