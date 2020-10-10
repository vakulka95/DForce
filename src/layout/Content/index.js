import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
import routes from '../../router';
import './style.scss';


const Content = () => {

    return(
    <main className="container">
        <div>
            <Suspense fallback={ <div style={{textAlign:'center',fontSize:'25px',height:'900px'}}>{'Loading'}</div> }>
                
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
        </div>
    </main>
    )
};

export default Content;
