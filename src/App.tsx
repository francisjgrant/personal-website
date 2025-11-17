import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/personal-website" element={<Home />} />
        <Route path="/personal-website/projects/:slug" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
