import Handlebars from 'handlebars';
import template from './template';
import './style.scss';
import drop from '../../../../../static/drop.svg';

export default () => {
  const compiled = Handlebars.compile(template);

  const data = {
    menuIcon: drop,
  };

  return compiled(data);
};
