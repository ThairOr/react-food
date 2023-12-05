import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import React from "react";
import Mynav from "./components/Mynav";
import { AuthContextProvider } from "./contexts/AuthContesxt";



function App() {

  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Mynav />
          <Pages />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}


export default App;
