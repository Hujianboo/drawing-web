import React, {Suspense, lazy} from 'react';

import Header from '@pages/Header'
import LeftBar from '@pages/LeftBar'
import Preview from '@pages/Preview';
const App = (): React.ReactElement => (
    <div className='drawing-web'>
        <Header/>
        <div className='drawing-web-container'>
            <LeftBar/>
            <Preview/>
        </div>
    </div>
);
export default App
