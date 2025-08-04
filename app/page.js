"use client";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/work";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
