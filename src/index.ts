import pageChat from './pages/chat/chat';
import pageAuth from './pages/login/login';
import pageRegister from './pages/register/register';
import page500 from './pages/500/error500';
import page404 from './pages/404/error404';
import pageProfile from './pages/profile/profile';
import './styles/main.scss';

const routeLinks = require('./data/data.json');

const routes = {
  [routeLinks.CHAT]: pageChat,
  [routeLinks.LOGIN]: pageAuth,
  [routeLinks.REGISTER]: pageRegister,
  [routeLinks.PROFILE]: pageProfile,
  [routeLinks.ERROR_404]: page404,
  [routeLinks.ERROR_500]: page500,
};

const app = document.getElementById('app');
app.innerHTML = routes[window.location.pathname]?.();
