import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider, { ShopContext } from './Components/Context/ShopContext';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ShopContextProvider>
    <App />
    </ShopContextProvider>
    
 
);

reportWebVitals();
