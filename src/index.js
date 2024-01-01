// 메인페이지 CSS 불러오기
import "./css/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Main } from "./components/pages/Main";
import { Program } from "./components/pages/Program";
import { Live } from "./components/pages/Live";
import { Customer } from "./components/pages/Customer";
import { Login } from "./components/pages/Login";
import ReactModal from "react-modal";
import ModalsProvider from "./components/modules/ModalsProvider";
import store from "./redux/store";
ReactModal.setAppElement("#root");
function App() {
  return (
    <>
      <Provider store={store}>
        <ModalsProvider>
          {/* "homepage": "https://zoe-world.github.io/FED-RF-2023-Dist-LJE/" */}
          <HashRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="main" element={<Main />} />
                <Route path="/program" element={<Program />} />
                <Route path="/live" element={<Live />} />
                <Route path="/login" element={<Login />} />
                <Route path="/customer" element={<Customer cat="customer" />} />
              </Route>
            </Routes>
          </HashRouter>
        </ModalsProvider>
      </Provider>
    </>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
