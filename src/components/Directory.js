import React from 'react';
import styled from 'styled-components';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { directorySectionsSelector } from '../redux/selectors/directory.selectors';

import MenuItem from './MenuItem';

const Directory = ({ sections }) => {

    return (
        <Container>
            {sections.map(({ id, ...sectionProps }) => (
                <MenuItem key={id} {...sectionProps} />
            ))}
        </Container>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: directorySectionsSelector
})

export default connect(mapStateToProps)(Directory);


const Container = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content: space-between;
`;