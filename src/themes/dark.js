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
            body: {
                ...theme.screen.global.body,
                fontSize: '1em'
            }
        },
        components: {
            ...theme.screen.components,
            heading: {
                ...theme.screen.components.heading,
                h3: {
                    ...theme.screen.components.heading.h3,
                    color: theme.screen.colors.secondary
                },
                h4: {
                    ...theme.screen.components.heading.h4,
                    color: theme.screen.colors.secondary
                },
                h5: {
                    ...theme.screen.components.heading.h5,
                    color: theme.screen.colors.secondary
                }
            },
            code: {
                ...theme.screen.components.code,
                fontSize: '1em',
                color: theme.screen.colors.secondary
            },
            syntax: {
                ...theme.screen.components.syntax,
                fontSize: '2em',
            },
            text: {
                ...theme.screen.components.text,
                color: theme.screen.colors.secondary,
                fontSize: '2em',
                marginBottom: '.5em'
            },
            link: {
                ...theme.screen.components.link,
                color: '#E7AD52',
                textDecoration: 'none'
            },
            list: {
                listStylePosition: 'inside',
                maxWidth: '1000px',
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            listItem: {
                ...theme.screen.components.listItem,
                textAlign: 'left'
            },
            quote: {
                ...theme.screen.components.quote,
                fontSize: 'initial',
                borderLeft: '10px solid ' + theme.screen.colors.quartenary
            }
        }
    }
}

export default theme
