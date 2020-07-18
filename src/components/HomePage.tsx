import React from 'react';
import SearchBar from './SearchBar';
import JobsList from './JobsList';
import Filters from './FilterCollection';
import styled from 'styled-components';

const Divider = styled.div`
    display: flex;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

const HomePage = () => (
    <div>
        <SearchBar></SearchBar>
        <Divider>
            <Filters></Filters>
            <JobsList></JobsList>
        </Divider>
        
    </div>
)

export default HomePage;