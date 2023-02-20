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
                return {accessToken: "ACCESS", refreshToken: "REFRESH"}
            }
            return {messaga: "wring password", timestamp: 123213}
        });
        this.post("/refresh", (schema,request) => {
            const json =JSON.parse(request.requestBody)
            console.log("MOCK",  json)
            return {accessToken: "ACCESS", refreshToken: "REFRESH"}
        });

        this.get("/formstage", (schema, request) => {
            console.log("request from stages", request.requestHeaders)
            return {isLock: false, complite: 0};
        })

        this.get("/getuser", (schema, request) => {
            return {email: "fromserver@mail.com", id: "one", name: "Victor"}
        })
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

