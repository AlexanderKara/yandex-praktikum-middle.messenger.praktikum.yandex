import Handlebars from 'handlebars';
import template from './template.js';
import './chat.scss';
import getChats from "./chats/chats";
import getMessages from "./messages/messages";
import getMenu from "./menu/menu";
import getHeader from "./header/header";

export default () => {
    let compiled = Handlebars.compile(template);
   
    let data = {
        menu: getMenu(),
        header: getHeader(),
        chats: getChats(),
        messages: getMessages(),

    };

    let html = compiled(data);
    return html;
};