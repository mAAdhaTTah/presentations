import React from 'react';
import { Markdown, Slide } from 'spectacle';
import mdAboutMe from './about-me.md';

export class AboutMe extends React.Component {
    render() {
        return (
            <Slide transition={['slide']}>
                <Markdown>{mdAboutMe}</Markdown>
            </Slide>
        );
    }
}
