import Handlebars from 'handlebars';
import template from './template.js';
import './style.scss';
import userIco from '../../../../static/userIco.svg';
import bellIco from '../../../../static/bellIco.svg';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        userIcon: userIco,
        bellIcon: bellIco
    };
   

    let html = compiled(data);
    return html;
};