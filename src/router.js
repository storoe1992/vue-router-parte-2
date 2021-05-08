import Vue from 'vue';
import Router from 'vue-router';
const Portada = () => import('./components/Portada');
const AboutMe = () => import( './components/AboutMe');
const Contact = () => import( './components/Contact');
import LastPost from './components/LastPost';
const Post = () => import ( './components/Post');
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