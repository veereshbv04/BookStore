import "./App.css";
import {Footer, Header} from "./components/index"
import Router from "./router/router";
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Router/>
      <ToastContainer/>
      <Footer/>
        
    </div>
  );
}

export default App;
