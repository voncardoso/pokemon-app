import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
