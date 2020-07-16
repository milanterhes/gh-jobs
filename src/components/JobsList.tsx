import React from 'react';
import styled from 'styled-components';
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

const job = {}

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
                    <span>{created_at}</span>
                </JobsCardCreated>
            </RightSide>
        </Wrapper>
    </JobsCardDiv>
)

const JobsList = () => (
    <ListComp id='jobslist'>
        <JobsCard {...job}/>
    </ListComp>
)


export default JobsList;