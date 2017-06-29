import 'impress.js';
import 'prismjs';
import 'prismjs/themes/prism-twilight.css';
import './index.scss';
import { evolve, identity, pipe } from 'ramda';
import fm from 'front-matter';
import commonmark from 'commonmark';
import slides from 'dir!./slides';
import template from './slide.hbs';

document.addEventListener('DOMContentLoaded', () => {
    var reader = new commonmark.Parser();
    var writer = new commonmark.HtmlRenderer();

    const prezi = document.getElementById('impress');

    prezi.innerHTML = Object.keys(slides)
        .filter(filename => filename.indexOf('.md') !== -1)
        .map(filename => slides[filename].src)
        .map(fm)
        .map(evolve({
            attributes: identity,
            body: pipe(
                reader.parse.bind(reader),
                writer.render.bind(writer)
            )
        }))
        .map(template)
        .reduce((html, slide) => html + slide, '');

    global.impress().init();

    global.Prism.highlightAll();
});
