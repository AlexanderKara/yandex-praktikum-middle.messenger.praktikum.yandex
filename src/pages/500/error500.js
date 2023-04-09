import Handlebars from 'handlebars';
import template from './template.js';
import './style.scss';
import '../../components/floater'

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        title: 'Ошибка 500',
        text: "Извините, что-то пошло не так. Мы постараемся всё исправить как можно быстрее.",
        buttonText: "Попробовать еще раз",
        goBackLink: "Назад к чатам",
    };

    let html = compiled(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html })
    return htmlContainer;
};
