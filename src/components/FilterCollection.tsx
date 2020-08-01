import React from 'react';
import styled from 'styled-components';

const Collection = styled.div`
    width: 45%;
    height: 100px;
    background: white;
    margin-top: 16px;
`

type FilterCheckboxProps = {
    label: string;
}

const FilterCheckbox = ({ label }: FilterCheckboxProps) => {
    const Label = styled.label`
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #334680;
        margin-left: 12px;
    `
    return (
        <React.Fragment>
            <input type="checkbox" name={`FilterCheckbox-${label}`} />
            <Label htmlFor={`FilterCheckbox-${label}`}>{label}</Label>
        </React.Fragment>
    )
}

const FilterCollection = () => (
    <Collection>
        <div id="type">
            <FilterCheckbox label={"Full time"} />
        </div>
        <div id="location">
            <div id="location-search"></div>
            <div id="locations"></div>
        </div>
    </Collection>
)

export default FilterCollection;