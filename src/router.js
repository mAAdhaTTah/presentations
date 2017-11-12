import React from 'react'
import paramCase from 'param-case'
import sheet from 'sheet-router'
import * as Prezis from './presentations'

const titleCase = text => text.replace(/([A-Z])/g, ' $1')
    .replace(/(By|At|In)\s/, word => word.toLowerCase())
    .replace(/(Reactnyc)/, () => 'ReactNYC')
    .replace(/(Brookjs)/, () => 'brookjs')
    .replace(/(Scripted)/, () => 'ScriptEd')
    .replace(/(Year1)/, () => 'Year 1')
    .replace(/(Vuejs)/, () => 'Vue.js')

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
)

const routes = [
    ['/', () => IndexRoute],
    ...Object.entries(Prezis).map(([key, Component]) =>
        [`/${paramCase(key)}`, () => Component]
    )
]

export default sheet({ default: '/' }, routes)
