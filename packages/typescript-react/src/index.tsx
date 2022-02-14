/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDom from 'react-dom';

import {App} from '@components/app/app';
//@ts-ignorets-ignore
import test from '@module/first';
console.log(test);
ReactDom.render(<App />, document.getElementById('root'));
