import vueRouter from 'vue-router'
import User from './components/User'
import RoomType from './components/RoomType'
import Login from './components/Login'
import Reserve from './components/Reserve'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/', //cuando se coloque esta ruta
            name: "root", //nombre que le pondremos a esa ruta
            component: App //se cargara este componente
        },
        {        
            path: '/user/:username',
            name: "username",
            component: User
        },
        {
            path: '/user/roomtype/',
            name: "room_type",
            component: RoomType
        },
        {
            path: '/user/login/',
            name: "login",
            component: Login
        },
        {
            path: '/user/reserve/',
            name: "reserve",
            component: Reserve
        },
    ]
})
export default router