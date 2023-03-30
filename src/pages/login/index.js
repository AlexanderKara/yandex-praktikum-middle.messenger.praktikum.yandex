import page from './login.hbs'
import { button } from '/src/components/button/index'
import { containerWrapped } from '/src/components/container/index'

const fields = {
    authorization: {
        login: {
            name: 'login',
            id: 'login',
            placeholder: 'Введите логин',
        },
        password: {
            name: 'password',
            id: 'password',
            placeholder: 'Введите пароль',
        },
        register: {
            text: 'Нет аккаунта?',
        },
        buttonText: 'Авторизация',
    },
}

export const pageLogin = () => {
    containerWrapped()
    button('fieldButton')
    return page(fields)
}