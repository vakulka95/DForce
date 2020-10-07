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
        path:       ['/specialization'],
        components: lazy(
            () => import('../pages/Specialization')
        ),
    },
    {
        path:       ['/portfolio'],
        components: lazy(
            () => import('../pages/GiveHelp')
        ),
    },
    {
        path:       ['/about'],
        components: lazy(
            () => import('../pages/About')
        ),
    },
    {
        path:       ['/forcustomer'],
        components: lazy(
            () => import('../pages/ForCustomer')
        ),
    },
];

export default routes;
