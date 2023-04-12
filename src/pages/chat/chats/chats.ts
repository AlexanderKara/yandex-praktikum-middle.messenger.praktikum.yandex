import Handlebars from 'handlebars';
import template from './template';
import './style.scss';
import avatar from '../../../../static/userIco.svg';
import status1 from '../../../../static/check.svg';
import status2 from '../../../../static/doublecheck.svg';
import status3 from '../../../../static/bluecheck.svg';
import getHeader from './header/header';

export default () => {
  const compiled = Handlebars.compile(template);

  const data = {
    header: getHeader(),
    chats: [
      {
        chatName: 'Аркадий',
        message: {
          author: 'Аркадий',
          text: 'Привет!',
          time: '12:00',
        },
        avatar,
        unreadMessages: status3,
      },
      {
        chatName: 'Геннадий',
        message: {
          author: 'Вы',
          text: 'Можно или сегодня или завтра вечером.',
          time: 'вчера',
        },
        avatar,
        unreadMessages: status2,
      },
      {
        chatName: 'Елена',
        message: {
          author: 'Вы',
          text: 'Можно или сегодня или завтра вечером.',
          time: 'вчера',
        },
        avatar,
        unreadMessages: status1,
      },
    ],
  };

  return compiled(data);
};
