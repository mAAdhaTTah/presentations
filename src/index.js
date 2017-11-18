import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import href from 'sheet-router/href'
import Redbox from 'redbox-react'

import router from './router'

const CustomErrorReporter = ({ error }) => <Redbox error={error} />

CustomErrorReporter.propTypes = {
    error: PropTypes.instanceOf(Error).isRequired
}

const root = document.getElementById('root')

const render = Component => {
    ReactDOM.render(
        <AppContainer errorReporter={CustomErrorReporter}>
            <Component />
        </AppContainer>,
        root
    )
}

render(router(location.pathname))

href(dest => {
    history.pushState({}, null, dest.pathname)
    render(router(dest.pathname))
})

if (module.hot) {
    module.hot.accept('./router', () => {
        render(router(location.pathname))
    })
}
