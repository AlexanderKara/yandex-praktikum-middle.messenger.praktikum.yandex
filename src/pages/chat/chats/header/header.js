import Handlebars from 'handlebars';
import template from './template.js';
import './style.scss';
import drop from '../../../../../static/drop.svg';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        menuIcon: drop,
    };
   

    let html = compiled(data);
    return html;
};
