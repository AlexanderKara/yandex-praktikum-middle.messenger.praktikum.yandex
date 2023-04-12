import Handlebars from 'handlebars';
import template from './template';
import './style.scss';
import '../../components/floater';

export default () => {
  const compiled = Handlebars.compile(template);

  const data = {
    title: 'Ошибка 500',
    text: 'Извините, что-то пошло не так. Мы постараемся всё исправить как можно быстрее.',
    buttonText: 'Попробовать еще раз',
    goBackLink: 'Назад к чатам',
  };

  const html = compiled(data);

  const compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
  return compiledFloatingContainer({ floatingContainer: html });
};
