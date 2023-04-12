import Handlebars from 'handlebars';
import template from './template';
import './style.scss';

const logoPic = '../../../../static/logo.svg';
const logoutPic = '../../../../static/logout.svg';
const err404Pic = '../../../../static/err404.svg';
const err500Pic = '../../../../static/err500.svg';
const profilePic = '../../../../static/profile.svg';
const regPic = '../../../../static/reg.svg';
const authPic = '../../../../static/logout.svg';
const chatPic = authPic;

const routeLinks = require('../../../data/data.json').routes;
const appStrings = require('../../../data/data.json').strings;

export default () => {
  const compiled = Handlebars.compile(template);

  const links = [
    {
      href: routeLinks.CHAT,
      title: appStrings.CHATS_MENU_BUTTON_CHATS_NAME,
      image: chatPic,
    },
    {
      href: routeLinks.REGISTER,
      title: appStrings.CHATS_MENU_BUTTON_REGISTER_NAME,
      image: regPic,
    },
    {
      href: routeLinks.LOGIN,
      title: appStrings.CHATS_MENU_BUTTON_LOGIN_NAME,
      image: authPic,
    },
    {
      href: routeLinks.PROFILE,
      title: appStrings.CHATS_MENU_BUTTON_PROFILE_NAME,
      image: profilePic,
    },

    {
      href: routeLinks.ERROR_404,
      title: appStrings.CHATS_MENU_BUTTON_404_NAME,
      image: err404Pic,
    },
    {
      href: routeLinks.ERROR_500,
      title: appStrings.CHATS_MENU_BUTTON_500_NAME,
      image: err500Pic,
    },
  ];

  const data = {
    logoButton: logoPic,
    menuList: links,
    logoutButton: logoutPic,
  };

  return compiled(data);
};
