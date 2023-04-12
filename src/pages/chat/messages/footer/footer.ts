import Handlebars from 'handlebars';
import template from './template';
import './style.scss';
import emojiIco from '../../../../../static/emoji.svg';
import voiceIco from '../../../../../static/voice.svg';
import clipIco from '../../../../../static/clip.svg';
import sendIco from '../../../../../static/send.svg';

const appStrings = require('../../../../data/data.json').strings;

export default () => {
  const compiled = Handlebars.compile(template);

  const data = {
    inputPlaceholder: appStrings.CHATS_MESSAGES_INPUT_PLACEHOLDER,
    emoji: emojiIco,
    voice: voiceIco,
    attach: clipIco,
    send: sendIco,
  };

  return compiled(data);
};
