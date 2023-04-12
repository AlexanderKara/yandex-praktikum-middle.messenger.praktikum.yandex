import Handlebars from 'handlebars';
import template from './template';
import '../../components/button';
import '../../components/input';
import './style.scss';
import '../../components/floater';

export default () => {
  const compiled = Handlebars.compile(template);

  const data = {
    title: 'Регистрация',
    buttonText: 'Зарегистрироваться',
    goBackLink: 'Войти',
  };

  const html = compiled(data);

  const compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');

  return compiledFloatingContainer({ floatingContainer: html });
};
