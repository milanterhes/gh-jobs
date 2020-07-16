import React from 'react';
import './app.css';
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = styled.div`
  margin: 32px 120px 0 120px;
`;

function App() {
  return (
    <Layout>
      <Header />
      <Footer />
    </Layout>
  );
}

export default App;
