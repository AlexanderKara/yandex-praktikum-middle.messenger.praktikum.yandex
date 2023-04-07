import Handlebars from 'handlebars';
import template from './template.js';
import '../../components/button';
import './style.scss';
import '../../components/floater';
import userIco from '../../../static/userIco.svg';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        title: 'Настройки пользователя',
        buttonText: 'Сохранить',
        imageSrc: userIco,
    };

    let html = compiled(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html })
    return htmlContainer;
};