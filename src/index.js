import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {ProductProvider} from "./contexts/product-context"
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
       <ProductProvider>
         <AuthProvider>
              <App/>
         </AuthProvider>
       </ProductProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById("root")
);
