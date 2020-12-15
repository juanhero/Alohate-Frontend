import vueRouter from 'vue-router'
import Room from './components/Room'
import RoomType from './components/RoomType'
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
            path: '/user/:room',
            name: "room",
            component: Room
        },
        {
            path: '/user/roomtype/:room',
            name: "room_type",
            component: RoomType
        },
    ]
})
export default router