import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import href from 'sheet-router/href';

import router from './router';

const root = document.getElementById('root');

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        root
    );
};

render(router(location.pathname));

href(dest => {
    history.pushState({}, null, dest.pathname);
    render(router(dest.pathname));
});

if (module.hot) {
    module.hot.accept('./router', () => {
        render(router(location.pathname));
    });
}
