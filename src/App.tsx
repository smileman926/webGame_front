import React from "react";
import "./App.scss";
import { Layout } from "./layout/layout";
import WebGame from "./pages/webGame/webGame";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "./chain/tools/getLibrary";

function App() {
  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <WebGame />
        </Layout>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
