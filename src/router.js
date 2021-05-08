import Vue from 'vue';
import Router from 'vue-router';
import Portada from './components/Portada';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import LastPost from './components/LastPost';
import Post from './components/Post';
import NotFound from './components/NotFound';
import Admin from './components/Admin';
import AdminSimple from './components/AdminSimple';
import AdminAvanzado from './components/AdminAvanzado';


Vue.use(Router);

export default new Router({

    mode: 'history',
    routes: [
        {
            path: '/',
            component: Portada,
            name: 'portada'
        },
        {
            path: '/sobremi',
            component: AboutMe,
            name : 'sobremi',
            alias: ['/acerca']
        },
        {
            path: '/contacto',
            component: Contact,
            alias: ['/contactame']
        },
        {
            path: '/post/:id', 
            component: LastPost, 
            children: [
                { 
                  path: '/', 
                  component: Post 
                }
            ]
          },
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/administrador',
            component: Admin,
            children : [
                {
                    path: 'simple',
                    component: AdminSimple
                },
                {
                    path: 'avanzado',
                    component: AdminAvanzado
                }
            ]
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/inicio',
            redirect: '/'
        },
        {
            path: '/portada',
            redirect: '/'
        },
    ]
});