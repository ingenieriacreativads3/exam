//import logo from './logo.svg';
import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./screem/Home";
import Form from "./screem/Form";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home data={data} />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
