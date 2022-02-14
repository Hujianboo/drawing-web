/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import React, {Suspense, lazy} from 'react';

import {stylesHeader, stylesImage} from './app.module.scss';

const LazyStrawberryIcon = lazy(() => import('./strawberry'));
export const App = (): React.ReactElement => (
    <div>
        <Suspense fallback={'loading...'}>
            <LazyStrawberryIcon className={stylesImage} />
        </Suspense>
    </div>
);
