import "./App.css";
import {Footer, Header} from "./components/index"
import Router from "./router/router";
import {ToastContainer} from "react-toastify"

// import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <ToastContainer/>
      {/* starting from "/" home page routing happens , header remains always as it is a single entity in parent app component */}
      <Footer/>
        
    </div>
  );
}

export default App;
