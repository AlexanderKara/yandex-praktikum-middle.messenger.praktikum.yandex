import pageChat from "./pages/chat/chat";
import pageAuth from "./pages/login/login";
import pageRegister from "./pages/register/register";
import page500 from "./pages/500/error500";
import page404 from "./pages/404/error404";
import pageProfile from "./pages/profile/profile";
import "./styles/main.scss";

const RC = require ('./data/routes.js').routes;

const routes = {
    [RC.CHAT]: pageChat,
    [RC.LOGIN]: pageAuth,
    [RC.REGISTER]: pageRegister,
    [RC.PROFILE]: pageProfile,
    [RC.ERROR_404]: page404,
    [RC.ERROR_500]: page500,
}

const app = document.getElementById("app");
app.innerHTML = routes[window.location.pathname]?.();


