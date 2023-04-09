import Handlebars from 'handlebars';
import template from './template.js';
import './style.scss';
import logoPic from '../../../../static/logo.svg'
import logoutPic from '../../../../static/logout.svg'
import err404Pic from '../../../../static/err404.svg'
import err500Pic from '../../../../static/err500.svg'
import profilePic from '../../../../static/profile.svg'
import regPic from '../../../../static/reg.svg'
import authPic from '../../../../static/logout.svg'
import chatPic from '../../../../static/chat.svg'

const RC = require ('../../../data/routes.js').routes;
export default () => {
    let compiled = Handlebars.compile(template);

    const links = [
        {
            href: RC.CHAT,
            title: "Чаты",
            image: chatPic,
        },
        {
            href: RC.REGISTER,
            title: "Регистрация",
            image: regPic,
        },
        {
            href: RC.LOGIN,
            title: "Вход",
            image: authPic,
        },
        {
            href: RC.PROFILE,
            title: "Профиль",
            image: profilePic,
        },

        {
            href: RC.ERROR_500,
            title: "500",
            image: err500Pic,
        },
        {
            href: RC.ERROR_404,
            title: "404",
            image: err404Pic,
        },
    ];

    let data = {
        logoButton: logoPic,
        menuList: links,
        logoutButton: logoutPic,
    };
   

    let html = compiled(data);
    return html;
};
