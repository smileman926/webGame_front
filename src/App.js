import "./App.scss";
import { Layout } from "./layout/layout";
import WebGame from "./pages/webGame/webGame";

function App() {
  return (
    <div className="App">
      <Layout>
        <WebGame />
      </Layout>
    </div>
  );
}

export default App;
