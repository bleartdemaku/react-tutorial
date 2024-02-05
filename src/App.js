import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateBlog from "./components/CreateBlog";
import NoPage from "./components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create" element={<CreateBlog />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
