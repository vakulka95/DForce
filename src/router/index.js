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
    }
];

export default routes;
