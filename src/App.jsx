import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Demo = lazy(() => import("./pages/Demo"));
const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={Home}>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="demo" element={<Demo />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
