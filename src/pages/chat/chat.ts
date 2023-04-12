import Handlebars from 'handlebars';
import { template } from './template';
import './chat.scss';
import getChats from './chats/chats';
import getMessages from './messages/messages';
import getMenu from './menu/menu';
import getHeader from './header/header';

export default () => {
  const compiled = Handlebars.compile(template);

  const data = {
    menu: getMenu(),
    header: getHeader(),
    chats: getChats(),
    messages: getMessages(),

  };

  return compiled(data);
};
