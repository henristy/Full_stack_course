import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Searchpage from "./pages/Searchpage";
import  CompanyPage  from "./pages/CompanyPage";
import  FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Searchpage />} />
        <Route path="/:company" element={<CompanyPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
