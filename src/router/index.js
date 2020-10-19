import { lazy } from 'react';

const routes = [
    {
        path:       ['/'],
        exact:      true,
        components: lazy(
            () => import('../pages/Home')
        ),
    },
    {
        path:       ['/itseems'],
        components: lazy(
            () => import('../pages/ItSeems/ItSeems.js')
        ),
    },
    {
        path:       ['/tellme'],
        components: lazy(
            () => import('../pages/Tellme/TellMe.js')
        ),
    },
    {
        path:       ['/allprojects'],
        components: lazy(
            () => import('../pages/AllProjects/index.js')
        )
    }

];

export default routes;
