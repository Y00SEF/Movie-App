import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import MoveDetiels from "./pages/MoveDetails/MoveDetails";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import { Bounce, ToastContainer } from "react-toastify";
import Layout from "./components/Layout/Layout";
import People from "./pages/People/People";
import Actor from "./pages/Actor/Actor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/move/:id" element={<MoveDetiels />} />
            <Route path="/people" element={<People />} />
            <Route path="/actor/:id" element={<Actor />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
