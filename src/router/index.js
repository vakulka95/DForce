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

];

export default routes;
