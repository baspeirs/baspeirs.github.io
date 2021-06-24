import React from "react";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import "./style.css";
import EducationCard from "../../EducationCard";
import WorkHistoryCard from "../../WorkHistoryCard/";
import workHistory from "../../../workHistory.json";
import education from "../../../education.json";

function Experience() {
    return (
        <div id="experience">
            <Container>
                <div id="xpToggle"></div>
            <h2 id="experienceHeader" >Experience</h2>
            <Row>
                <Column size="lg-6">
                    <h3 className="experienceSub">Education</h3>
                    {education.map(school => {
                        return <EducationCard
                            school={school.school}
                            term={school.term}
                            completion={school.completion}
                        />
                    })}
                </Column>
                <Column size="lg-6">
                    <h3 className="experienceSub">Work History</h3>
                    {workHistory.map(job => {
                        return <WorkHistoryCard
                            employer={job.employer}
                            title={job.title}
                            term={job.term}
                        />
                    })}
                </Column>
            </Row>

            <div class="spacer"></div>
            </Container>
        </div >
    )
}

export default Experience;