import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";

import Footer from "./components/feature/Footer";
import TopAppBar from "./components/feature/TopAppBar";

import SoundLib from "./components/pages/SoundLib";
import FabLib from "./components/pages/FabLib";
import Home from "./components/pages/Home";
import Scene from "./components/pages/Scene";
import About from "./components/pages/About";
import Nav from "./components/feature/Nav";

export default function App() {
  return (
    <>
      <Container
        sx={{
          bgcolor:'background.default', 
          // bgColor:'background.default',
          // my: 10,
          // height:"100vh",
          // background:
          //   "linear-gradient(178deg, rgba(40,44,52,1) 70%, rgba(83,63,64,1) 100%)",
          // backgroundSize: "cover",
        }}
        maxWidth="false"
      >
        <TopAppBar />
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fabLib" element={<FabLib />} />
          <Route path="/soundLib" element={<SoundLib />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </Container>
    </>
  );
}
