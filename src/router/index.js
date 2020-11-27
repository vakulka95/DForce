import { lazy } from 'react';

const routes = [
    {
        path:       ['/', '/#home', '/en'],
        exact:      true,
        components: lazy(
            () => import('../pages/Home')
        ),
    },
    {
        path:       ['/itseems',  '/en/itseems'],
        components: lazy(
            () => import('../pages/ItSeems/ItSeems.js')
        ),
    },
    {
        path:       ['/tellme', '/en/tellme'],
        components: lazy(
            () => import('../pages/Tellme/TellMe.js')
        ),
    },
    {
        path:       ['/allprojects', '/en/allprojects'],
        components: lazy(
            () => import('../pages/AllProjects/index.js')
        )
    },
    {
        path:       ['/vote', '/en/vote'],
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
