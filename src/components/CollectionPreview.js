import React from 'react'
import styled from 'styled-components'

import { TitleBig } from '../styles/typography'

import CollectionItem from './CollectionItem'

const CollectionPreview = ({ title, items }) => {
    return (
        <Container>
            <TitleBig>{title}</TitleBig>
            <Collection>
                {
                    items.filter((item, i) => i < 4)
                        .map(({ id, ...itemProps }) => <CollectionItem
                            key={id}
                            {...itemProps}
                        />)
                }
            </Collection>
        </Container>
    )
}

export default CollectionPreview


const Container = styled.div`
margin-bottom: 3.2rem;
`

const Collection = styled.div`
display:flex;
justify-content:space-between;

`