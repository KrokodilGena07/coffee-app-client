import React, {FC, Suspense} from 'react';
import {routes} from '@/router';
import {Route, Routes} from 'react-router-dom';

const AppRouter: FC = () => {
    return (
        <Suspense fallback='Loading...'>
            <Routes>
                {routes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;