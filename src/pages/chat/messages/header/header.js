import Handlebars from 'handlebars';
import template from './template.js';
import './style.scss';
import dotsIcon from '../../../../../static/dots.svg';
import avatar from '../../../../../static/userIco.svg';
import videoCall from '../../../../../static/videocall.svg';
import voiceCall from '../../../../../static/voicecall.svg';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        avatar: avatar,
        nickname: 'Аркадий',
        status: '20 минут назад',
        voiceIcon: voiceCall,
        videoIcon: videoCall,
        menuIcon: dotsIcon,
    };
   

    let html = compiled(data);
    return html;
};