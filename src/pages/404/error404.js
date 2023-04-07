import Handlebars from 'handlebars';
import template from './template.js';
import './style.scss';
import '../../components/button';
import '../../components/floater';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        title: 'Ошибка 404',
        text: "Этой страницы не существует. Попробуйте набрать поисковый запрос правильно, или нажмите на кнопку ниже.",
        buttonText: "Вернуться на главную",
        goBackLink: "Назад к чатам",
    };

    let html = compiled(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html })
    return htmlContainer;
};