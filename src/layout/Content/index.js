import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
import routes from '../../router';
import './style.scss';
import ForCustomer from '../../components/home/ForCustomer/index'
import PreLoader from '../../components/Loader/PreLoader';


const Content = () => {

    return(
        
    <main >
            <Suspense fallback={ <PreLoader /> }>
                
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
