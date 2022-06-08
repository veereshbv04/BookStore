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
      {/* starting from "/" home page routing happens , header remains always as it is a single entity in parent app component */}
    </div>
  );
}

export default App;
