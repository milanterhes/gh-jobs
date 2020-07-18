import React from 'react';
import ago from 's-ago';
import { 
    JobsCardDiv,
    JobsCardImg,
    Wrapper,
    LeftSide,
    JobsCardCompany,
    JobsCardRole,
    JobsCardType,
    RightSide,
    JobsCardLocation,
    JobsCardCreated,
    ListComp 
} from './JobsListComps'

type JobsCardProps = {
    company: string,
    title: string,
    type?: string,
    location: string,
    created_at: string
}

const jobs = []

const JobsCard = ({company, title, type, location, created_at}: JobsCardProps) => (
    <JobsCardDiv>
        <JobsCardImg></JobsCardImg>
        <Wrapper>
            <LeftSide>
                <JobsCardCompany>{company}</JobsCardCompany>
                <JobsCardRole>{title}</JobsCardRole>
                {type && <JobsCardType>{type}</JobsCardType>}
            </LeftSide>
            <RightSide>
                <JobsCardLocation>
                    <span className="material-icons" style={{ fontSize: 15 }}>public</span>
                    <span>{location}</span>
                </JobsCardLocation>
                <JobsCardCreated>
                    <span className="material-icons" style={{ fontSize: 15 }}>schedule</span>
                    <span>{ago(new Date(created_at))}</span>
                </JobsCardCreated>
            </RightSide>
        </Wrapper>
    </JobsCardDiv>
)

const JobsList = () => (
    <ListComp id='jobslist'>
        {jobs.map(job => (<JobsCard {...job} />))}
    </ListComp>
)


export default JobsList;