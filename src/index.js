import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import paramCase from 'param-case';
import sheet from 'sheet-router';
import href from 'sheet-router/href';

import * as Presentations from './presentations';

const titleCase = text => text.replace(/([A-Z])/g, ' $1')
    .replace(/(By)/, word => word.toLowerCase());

const getRoutes = Prezis => {
    const IndexRoute = () => (
        <div>
            <ul>
                {Object.entries(Prezis).map(([key]) => (
                    <li key={key}>
                        <a href={`/${paramCase(key)}`}>
                            {titleCase(key)}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    const routes = Object.entries(Prezis).map(([key, Component]) =>
        [`/${paramCase(key)}`, () => Component]
    );
    routes.unshift(
        ['/', () => IndexRoute]
    );

    return routes;
};

const root = document.getElementById('root');
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        root
    );
};

let router = sheet({ default: '/' }, getRoutes(Presentations));

render(router(location.pathname));

href(dest => {
    history.pushState({}, null, dest.pathname);
    render(router(dest.pathname));
});

if (module.hot) {
    module.hot.accept('./presentations', () => {
        router = sheet({ default: '/' }, getRoutes(Presentations));
        render(router(location.pathname));
    });
}
