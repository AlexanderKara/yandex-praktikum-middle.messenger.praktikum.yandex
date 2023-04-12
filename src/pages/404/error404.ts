import Handlebars from 'handlebars';
import template from './template';
import './style.scss';
import '../../components/button';
import '../../components/floater';

export default () => {
  const compiled = Handlebars.compile(template);

  const data = {
    title: 'Ошибка 404',
    text: 'Этой страницы не существует. Попробуйте набрать поисковый запрос правильно, или нажмите на кнопку ниже.',
    buttonText: 'Вернуться на главную',
    goBackLink: 'Назад к чатам',
  };

  const html = compiled(data);

  const compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
  return compiledFloatingContainer({floatingContainer: html});
};
