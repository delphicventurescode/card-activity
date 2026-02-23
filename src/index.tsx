import './index.css';
import './assets/fonts/Kanit-Light.ttf';
import './assets/fonts/Kanit-Medium.ttf';
import './assets/fonts/Kanit-Regular.ttf';

import { Analytics } from '@vercel/analytics/react';
import { App } from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
        <Analytics />
    </React.StrictMode>,
);
