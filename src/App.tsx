import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
import NavBar from "./components/NavBar";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Demo = lazy(() => import("./pages/Demo"));
const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const UserMemories = lazy(() => import("./pages/UserMemories"));

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavBar />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="demo" element={<Demo />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="memories" element={<UserMemories />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
