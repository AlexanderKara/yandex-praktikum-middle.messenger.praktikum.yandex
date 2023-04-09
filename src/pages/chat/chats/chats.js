import Handlebars from 'handlebars';
import template from './template.js';
import './style.scss';
import avatar from '../../../../static/userIco.svg';
import status1 from '../../../../static/check.svg';
import status2 from '../../../../static/doublecheck.svg';
import status3 from '../../../../static/bluecheck.svg';
import getHeader from './header/header';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        header: getHeader(),
        chats: [
            {
                chatName: 'Аркадий',
                message: {
                    author: 'Аркадий',
                    text: 'Привет!',
                    time: '12:00',
                },
                avatar: avatar,
                unreadMessages: status3,
            },
            {
                chatName: 'Геннадий',
                message: {
                    author: 'Вы',
                    text: 'Можно или сегодня или завтра вечером.',
                    time: 'вчера',
                },
                avatar: avatar,
                unreadMessages: status2,
            },
            {
                chatName: 'Елена',
                message: {
                    author: 'Вы',
                    text: 'Можно или сегодня или завтра вечером.',
                    time: 'вчера',
                },
                avatar: avatar,
                unreadMessages: status1,
            },
        ]
    };
   

    let html = compiled(data);
    return html;
};
