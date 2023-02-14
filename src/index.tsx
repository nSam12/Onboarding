import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { basestore } from './store';


import { Server } from "miragejs";
const mock = new Server({
    routes() {
        this.namespace = "/api";
        this.post("/login", () => {
            return {accessToken: "ACCESS", refreshToken: "REFRESH", user:{email:"mymail", id:"firs", name:"DIMA"}}
        });
    }
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <Provider store={basestore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

