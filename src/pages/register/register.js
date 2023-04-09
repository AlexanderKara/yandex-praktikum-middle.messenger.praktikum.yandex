import Handlebars from 'handlebars';
import template from './template.js';
import '../../components/button';
import './style.scss';
import '../../components/floater'

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        title: "Регистрация",
        buttonText: 'Зарегистрироваться',
        goBackLink: 'Войти',
    };

    let html = compiled(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html })
    return htmlContainer;
};
