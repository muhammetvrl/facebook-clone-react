import React from 'react'
import { Container } from './styled';
import Story from '../Story/Story'

function StoryReel() {
    return (
        <Container>
            <Story
                image="https://images.unsplash.com/photo-1600442715284-a1d3ab7c423a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
                title="Muhammet Varol"
            />
            <Story
                image="https://images.unsplash.com/photo-1600726685814-cb25adab3328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
                title="Vladimir Kemp"
            />
            <Story
                image="https://images.unsplash.com/photo-1600497934937-2d02ebad5da3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://cdn.pixabay.com/photo/2018/05/19/22/03/man-3414477_960_720.png"
                title="Jonty Reed"
            />
            <Story
                image="https://images.unsplash.com/photo-1600631965708-89abd5b68ab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
                title="Chanel Porter"
            />
            <Story
                image="https://images.unsplash.com/photo-1600704600204-fa2bad1decff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=686&q=80"
                profileSrc="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                title="Ebrahim Villalobos"
            />
        </Container>
    )
}

export default StoryReel
