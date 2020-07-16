import React from 'react';
import styled from 'styled-components';
import g from '../google.png';

const ListComp = styled.div`
    width: 65%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const JobsCardDiv = styled.div`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    height: 147px;
    font-family: Roboto;
`

const JobsCardImg = () => {
    const Img = styled.img`
        max-height: 100%;
    `
    const Wrapper = styled.div`
        border-radius: 4px;
        margin: 12px 16px 12px 12px;
        height: 90px;
        width: 90px;
    `

    return (
        <Wrapper>
            <Img src={g} />
        </Wrapper>
    )
}

const JobsCardCompany = styled.div`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #334680;
    margin-bottom: 8px
`

const JobsCardRole = styled.div`
    font-size: 18px;
    line-height: 21px;
    color: #334680;
    margin-bottom: 18px;
`

const JobsCardType = styled.div`
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    padding: 6px;
    display: inline-flex;
    margin-right: auto;
`

const JobsCardLocation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 28.5px;
`

const JobsCardCreated = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
`

const RightSide = styled.div`
    margin-left: auto;
    margin-top: auto;
    display: flex;
    flex-direction: row;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #B9BDCF;
    margin-bottom: 22px;
    margin-right: 12px;

    .material-icons {
        margin-right: 8.5px;
    }
`

const JobsCard = () => (
    <JobsCardDiv>
        <JobsCardImg></JobsCardImg>
        <LeftSide>
            <JobsCardCompany>Google</JobsCardCompany>
            <JobsCardRole>Senior Fullstack Developer</JobsCardRole>
            <JobsCardType>Full time</JobsCardType>
        </LeftSide>
        <RightSide>
            <JobsCardLocation>
                <span className="material-icons" style={{fontSize: 15}}>public</span>
                <span>New York</span>
            </JobsCardLocation>
            <JobsCardCreated>
                <span className="material-icons" style={{fontSize: 15}}>schedule</span>
                <span>5 days ago</span>
            </JobsCardCreated>
        </RightSide>
    </JobsCardDiv>
)

const JobsList = () => (
    <ListComp id='jobslist'>
        <JobsCard />
    </ListComp>
)


export default JobsList;