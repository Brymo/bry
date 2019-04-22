import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'


render((

        <App/>

), document.getElementById('root'));
registerServiceWorker();






