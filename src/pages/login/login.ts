import Handlebars from 'handlebars';
import template from './template';
import '../../components/button';
import '../../components/buttonSecondary';
import '../../components/floater';
import './style.scss';

export default () => {
  const compiled = Handlebars.compile(template);
  const data = {
    title: 'Вход',
    buttonText: 'Войти',
    goBackLink: 'Зарегистрироваться',
  };

  const html = compiled(data);

  const compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
  const htmlContainer = compiledFloatingContainer({ floatingContainer: html });
  console.log('router htmlContainer:');
  console.log(htmlContainer);
  return htmlContainer;
};
