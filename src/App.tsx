import React from 'react';
import './app.css';
import styled from "styled-components";
import { Header, Footer, HomePage } from "./components";

const Layout = styled.div`
  margin: 32px 120px 0 120px;

  @media (max-width: 768px) {
    margin: 12px 12px 0 12px;
  }
`;

function App() {
  return (
    <Layout>
      <Header />
      <HomePage />
      <Footer />
    </Layout>
  );
}

export default App;
