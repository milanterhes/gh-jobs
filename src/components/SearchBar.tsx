import React from 'react';
import styled from 'styled-components';
import img from '../backgroundImg.png';

const SearchBarBackground = styled.div`
    width: 100%;
    height: 138px;
    margin-top: 32px;
    background-image: url(${img});
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InputBox = styled.div`
    width: 55%;
    height: 55px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
        margin: 42px 18px 42px 18px;
    }
`

//TODO: Set width of the button to dynamic
const Button = styled.div`
    height: 47px;
    width: 20%;
    background: #1E86FF;
    border-radius: 4px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

//TODO: Set width of input field to dynamic
const Input = styled.input.attrs({
    placeholderTextColor: "#B9BDCF"
})`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    width: 100%;
    border: 0;
    padding: 5px;
    padding-left: 44px;
    box-sizing: border-box;
    height: 100%;
    border-radius: 4px;

    ::placeholder{
        text-overflow:ellipsis;
    }

    &:focus {
        outline: none;
    }
`;

const InputContainer = styled.div`
    span { 
        position: absolute;
        padding: 10px; 
        min-width: 40px;
        color: #B9BDCF;
    }
    display: flex;
    align-items: center;
    width: 80%;
`

const SearchBar = () => (
    <SearchBarBackground>
        <InputBox>
            <InputContainer>
                <span className="material-icons">
                    work_outline
                </span>
                <Input
                    placeholder="Title, companies, expertise or benefits"
                />
            </InputContainer>
            <Button>Search</Button>
        </InputBox>
    </SearchBarBackground>
)

export default SearchBar;