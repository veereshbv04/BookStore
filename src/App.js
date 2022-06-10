import "./App.css";
import {Header} from "./components/index"
import {ProductListing} from "./pages/index"
// import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductListing/>
    </div>
  );
}

export default App;
