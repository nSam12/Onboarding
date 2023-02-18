import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { basestore } from './store';


import { Server } from "miragejs";
import { request } from 'http';

const mock = new Server({
    routes() {
        this.namespace = "/api";
        this.post("/login", (schema,request) => {
            const json =JSON.parse(request.requestBody)
            console.log("MOCK",  json)
            if(json.email === "user"){
                return {accessToken: "ACCESS", refreshToken: "REFRESH", user:{email:"from server email", id:"first", name:"DIMA"}}
            }
            return {}
        });
        this.post("/refresh", (schema,request) => {
            const json =JSON.parse(request.requestBody)
            console.log("MOCK",  json)
            return {accessToken: "ACCESS", refreshToken: "REFRESH", user:{email:"from server email", id:"first", name:"DIMA"}}
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

