import Handlebars from 'handlebars';
import template from './template.js';
import './style.scss';
import emojiIco from '../../../../../static/emoji.svg'
import voiceIco from '../../../../../static/voice.svg'
import clipIco from '../../../../../static/clip.svg'
import sendIco from '../../../../../static/send.svg'

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        inputPlaceholder: "Cообщение:",
        emoji: emojiIco,
        voice: voiceIco,
        attach: clipIco,
        send: sendIco,
    };
   

    let html = compiled(data);
    return html;
};
