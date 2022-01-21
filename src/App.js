import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import CustomRoutes from "./router/CustomRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomRoutes />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
