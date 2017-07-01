import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';
import React from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

let theme = createTheme({
    primary: '#111111',
    secondary: '#EEEEEE',
    tertiary: '#EEEEEE',
    quartenary: '#CECECE'
}, {
    primary: 'Montserrat',
    secondary: 'Open Sans'
});

theme = {
    ...theme,
    screen: {
        ...theme.screen,
        components: {
            ...theme.screen.components,
            text: {
                ...theme.screen.components.text,
                color: theme.screen.colors.secondary
            }
        }
    }
};

export default () => (
    <Deck transitionDuration={500} theme={theme}>
        <Slide>
            <Heading size={1} fit lineHeight={1}>
                Meet
            </Heading>
            <Heading size={1} fit lineHeight={1}>
                <code>brookjs</code>
            </Heading>
            <Text textSize={'40px'}>
                A framework for building streaming web applications.
            </Text>
        </Slide>
    </Deck>
);
