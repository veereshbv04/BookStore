import "./App.css";
import {Header} from "./components/index"
import {ProductListing} from "./pages/index"
import Router from "./router/router";
// import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>

      {/* <ProductListing/> */}
    </div>
  );
}

export default App;
