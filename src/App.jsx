import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Single from "./Page/Single";
import NewCourse from "./Page/NewCourse";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Single />} />
        <Route path="/new-course" element={<NewCourse />} />
      </Routes>
    </>
  );
}

export default App;
