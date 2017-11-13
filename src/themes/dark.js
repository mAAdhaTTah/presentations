import createTheme from 'spectacle/lib/themes/default'

let theme = createTheme({
    primary: '#111111',
    secondary: '#EEEEEE',
    tertiary: '#EEEEEE',
    quartenary: '#CECECE'
}, {
    primary: 'Montserrat',
    secondary: 'Open Sans'
})

theme = {
    ...theme,
    screen: {
        ...theme.screen,
        global: {
            ...theme.screen.global,
            a: {
                color: '#E7AD52',
                textDecoration: 'none'
            },
            ul: {
                maxWidth: '1000px',
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            li: {
                textAlign: 'left'
            },
            'code[class*="language-"], pre[class*="language-"]': {
                fontSize: '.75em',
                lineHeight: '1.25',
                maxWidth: '1000px',
            },
            '.playground .playgroundCode': {
                fontSize: '1.25rem'
            },
            '#result': {
                color: 'black'
            }
        },
        components: {
            ...theme.screen.components,
            heading: {
                ...theme.screen.components.heading,
                h3: {
                    ...theme.screen.components.heading.h3,
                    color: theme.screen.colors.secondary
                }
            },
            text: {
                ...theme.screen.components.text,
                color: theme.screen.colors.secondary
            },
            link: {
                ...theme.screen.components.link,
                color: '#E7AD52'
            }
        }
    }
}

export default theme
