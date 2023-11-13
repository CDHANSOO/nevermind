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
       {/* 20231113 최선화 - 정은우 -> 깃 허브 테스트 */}
     {/* <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/TPO" element={<TPO/>}/>
      </Routes> */}
      <TPO/>
    </>
  );
}

export default App;
