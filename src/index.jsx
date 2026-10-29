import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {
    registerServiceWorker,
    initInstallPrompt,
} from './pwa';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

/** Desktop build bundles every asset locally, so PWA install and offline caching are not needed */
const isTauri = !!import.meta.env.TAURI_ENV_PLATFORM;

/** Ready for install prompt */
if (!isTauri) initInstallPrompt();

// Register after the app has rendered, not during boot
if (import.meta.env.PROD && !isTauri) {
    window.addEventListener('load', () => {
        registerServiceWorker();
    });
}