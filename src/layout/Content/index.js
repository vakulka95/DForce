import React, { Suspense, useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import routes from '../../router';
import './style.scss';
import ForCustomer from '../../components/home/ForCustomer/index';
import PreLoader from '../../components/Loader/PreLoader';


const Content = () => {
    return(       
    <main >
            <Suspense fallback={ <PreLoader /> }>
                <Switch>  
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
                </Switch>  
            </Suspense>
            <ForCustomer /> 
    </main>
    )
};

export default Content;
