import { lazy } from 'react';

const routes = [
    {
        path:       ['/', '/#home', '/en', '/ru'],
        exact:      true,
        components: lazy(
            () => import('../pages/Home')
        ),
    },
    {
        path:       ['/itseems',  '/en/itseems', '/ru/itseems'],
        components: lazy(
            () => import('../pages/ItSeems/ItSeems.js')
        ),
    },
    {
        path:       ['/tellme', '/en/tellme', '/ru/tellme'],
        components: lazy(
            () => import('../pages/Tellme/TellMe.js')
        ),
    },
    {
        path:       ['/allprojects', '/en/allprojects', '/ru/allprojects'],
        components: lazy(
            () => import('../pages/AllProjects/index.js')
        )
    },
    {
        path:       ['/vote', '/en/vote', '/ru/vote'],
        components: lazy(
            () => import('../pages/Vote/index.js')
        )  
    },
    {
        path:       [''],
        components: lazy(
            
            () => import('../pages/NotFound/index.js')
        )  
    }

];

export default routes;
