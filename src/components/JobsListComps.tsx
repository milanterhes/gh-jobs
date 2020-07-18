import React from 'react';
import styled from 'styled-components';
import g from '../google.png';

export const ListComp = styled.div`
    width: 65%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const JobsCardDiv = styled.div`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    height: 147px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    background: #FFFFFF;
    margin: 16px 0;
`

export const JobsCardImg = () => {
    const Img = styled.img`
        max-width: 100%;
        max-height: 100%;
    `
    const Wrapper = styled.div`
        border-radius: 4px;
        margin: 12px 16px 12px 12px;
        width: 90px;
    `

    return (
        <Wrapper>
            <Img src={g} />
        </Wrapper>
    )
}

export const JobsCardCompany = styled.div`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #334680;
    margin-bottom: 8px
`

export const JobsCardRole = styled.div`
    font-size: 18px;
    line-height: 21px;
    color: #334680;
    margin-bottom: 18px;
`

export const JobsCardType = styled.div`
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

export const JobsCardLocation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 28.5px;
    span {
        width: max-content;
    }
`

export const JobsCardCreated = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        width: max-content;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #B9BDCF;

    .material-icons {
        margin-right: 8.5px;
    }

    flex: 0 1 auto;
    align-self: flex-end;
    margin-right: 15px;

    @media (max-width: 900px) {
        margin-top: 15px;
    }

    @media (max-width: 768px) {
        flex: initial;
        align-self: initial;
    }

`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`