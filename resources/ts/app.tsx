import "./bootstrap";
import "../css/app.css";
//import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from '@inertiajs/react'
//import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Guest from "./Pages/Layout/Guest";
import Auth from "./Pages/Layout/Auth";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from './store/index'

createInertiaApp({
  resolve: (name) => {

        //resolvePageComponent(`./Pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx'))
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        let page:any  = pages[`./Pages/${name}.tsx`] 

        let title: string, subtitle: string
        switch(name){
            case 'Auth/Login':
                title = 'Welcome Back'
                subtitle = 'Please sign in to continue'
                break;
            case 'Auth/Password': 
            case 'Auth/PasswordUpdate':
                title = 'Forgot Password?'
                subtitle = 'Recover your access through your email'
                break;
            default:
                title = 'Nombre de la tienda'
                subtitle = 'No credit card required'
        }
        
        page.default.layout = name.startsWith('Guest/') ? (page:any) => <Guest children={page} title={title} subtitle={subtitle} /> : (page:any) => <Auth children={page} />
        //if(name.startsWith('Guest/')) page.default.layout = page => <Blank children={page} />
        return page
    },
  setup({ el, App, props }) {
    createRoot(el).render(
        <ReduxProvider store={store}>
            <App {...props} />
        </ReduxProvider>
    );
  },
});