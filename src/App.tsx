import "./App.css";
// import Main from "./Page/Main";
import TPO from "./Page/TPO";
import Header from "./components/Header";
// import Body from "./components/Body";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
       <Header />
     {/* <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/TPO" element={<TPO/>}/>
      </Routes> */}
      <TPO/>
    </>
  );
}

export default App;
