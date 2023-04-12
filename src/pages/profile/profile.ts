import Handlebars from 'handlebars';
import template from './template';
import '../../components/button';
import './style.scss';
import '../../components/floater';
import userIco from '../../../static/userIco.svg';

export default () => {
  const compiled = Handlebars.compile(template);

  const data = {
    title: 'Настройки пользователя',
    buttonText: 'Сохранить',
    imageSrc: userIco,
  };

  const html = compiled(data);

  const compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
  return compiledFloatingContainer({ floatingContainer: html });
};
