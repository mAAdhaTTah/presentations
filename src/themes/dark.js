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
            li: {
                textAlign: 'left'
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
