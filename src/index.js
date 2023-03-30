import { pageReg } from './pages/register'
import { pageLogin } from './pages/login'
import { pageChat } from './pages/chat'
import { pageProfile } from './pages/profile'
import { page404} from './pages/404'
import { page500} from './pages/500'

const path = {
    '/login': pageLogin,
    '/reg': pageReg,
    '/chat': pageChat,
    '/profile': pageProfile,
    '/404': page404,
    '/500': page500
}

const renderDOM = (page) => {
    const main = document.getElementById('main')
    main.innerHTML = page()
}

const loader = (event) => {
    const pathTxt = window.location.pathname
    const contPg = path[pathTxt]
    if (contPg) {
        renderDOM(contPg)
    } else {
        renderDOM(path['/404'])
    }
}

window.addEventListener('load', loader)
window.addEventListener('hashchange', loader)