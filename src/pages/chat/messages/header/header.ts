import Handlebars from 'handlebars';
import template from './template';
import './style.scss';
import dotsIcon from '../../../../../static/dots.svg';
import avatar from '../../../../../static/userIco.svg';
import videoCall from '../../../../../static/videocall.svg';
import voiceCall from '../../../../../static/voicecall.svg';

export default () => {
  const compiled = Handlebars.compile(template);

  const data = {
    avatar,
    nickname: 'Аркадий',
    status: '20 минут назад',
    voiceIcon: voiceCall,
    videoIcon: videoCall,
    menuIcon: dotsIcon,
  };

  return compiled(data);
};
