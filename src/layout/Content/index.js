import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
import routes from '../../router';
import './style.scss';
import ForCustomer from '../../components/home/ForCustomer/index'
import Loader from '../../components/Loader';


const Content = () => {

    return(
    <main >
            <Suspense fallback={ <Loader /> }>
                
                    {
                        routes.map( ( route, index ) => (
                            <Route
                                key={ index }
                                path={ route.path }
                                exact={ route.exact }
                                render={ props => (
                                    <route.components { ...props } routes={ route.routes }/>
                            )}/>))
                    }
                
            </Suspense>
            <ForCustomer /> 
    </main>
    )
};

export default Content;
