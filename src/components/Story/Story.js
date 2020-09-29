import React from 'react'
import { Avatar } from "@material-ui/core";
import { Container } from './styled';


function Story({ image, profileSrc, title }) {
    return (
        <Container background={image}>
            <Avatar src={profileSrc}></Avatar>
            <h4>{title}</h4>
        </Container>
    )
}

export default Story
