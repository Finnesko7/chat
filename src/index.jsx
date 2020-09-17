import React from 'react';
import ReactDom from 'react-dom';
import "./style/App.scss";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";

const App = () => (
    <>
        <Header/>
        <ChatBox/>
    </>
);

ReactDom.render(<App/>, document.getElementById('app'));