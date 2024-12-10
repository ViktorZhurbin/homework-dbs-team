import React from "react";
import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import "@fortawesome/fontawesome-free/js/all.js";

import "./App.css";

const app = () => (
  <>
    <Header />
    <Content />
    <Footer />
  </>
);

export default app;
