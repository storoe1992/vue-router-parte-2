import Vue from 'vue';
import Router from 'vue-router';
import Portada from './components/Portada';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import LastPost from './components/LastPost';
import Post from './components/Post';
import NotFound from './components/NotFound';


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
            name : 'sobremi'
        },
        {
            path: '/contacto',
            component: Contact
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
        }
    ]
});