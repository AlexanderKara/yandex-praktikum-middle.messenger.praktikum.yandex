import Handlebars from 'handlebars';
import template from './template';
import './style.scss';
import getHeader from './header/header';
import getFooter from './footer/footer';

export default () => {
  const compiled = Handlebars.compile(template);

  const data = {
    header: getHeader(),
    footer: getFooter(),
    messages: [
      {
        author: 'Аркадий',
        text: 'Привет',
        time: '12:00',
      },
      {
        author: null,
        text: 'Привет',
        time: '12:01',
      },
      {
        author: 'Андрей',
        text: 'Как дела',
        time: '12:02',
      },
      {
        author: null,
        text: 'Пока не родила, но если вдруг, то я, безусловно, поставлю Вас в известность.',
        time: '12:02',
      },
    ],
  };

  return compiled(data);
};
