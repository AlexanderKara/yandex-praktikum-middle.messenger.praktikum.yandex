import Handlebars from 'handlebars';
import template from './template';
import '../../components/button';
import '../../components/buttonSecondary';
import '../../components/floater'
import './style.scss';

export default () => {
    let compiled = Handlebars.compile(template);
    let data = {
        title: "Вход",
        buttonText: 'Войти',
        goBackLink: 'Зарегистрироваться',
    };

    let html = compiled(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html })
    console.log('router htmlContainer:');
    console.log(htmlContainer);
    return htmlContainer;
};
