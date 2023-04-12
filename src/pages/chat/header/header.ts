import Handlebars from 'handlebars';
import template from './template';
import './style.scss';
import userIco from '../../../../static/userIco.svg';
import bellIco from '../../../../static/bellIco.svg';

export default () => {
  const compiled = Handlebars.compile(template);

  const data = {
    userIcon: userIco,
    bellIcon: bellIco,
  };

  return compiled(data);
};
