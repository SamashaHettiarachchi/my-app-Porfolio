"use client";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";



export default function Home() {

  const [isdarkMode, setIsDarkMode] = useState(false); // This can be set based on user preference or system settings

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true);
    }
    else {
      setIsDarkMode(false);
    }
  },[])

  useEffect(() => {
    if(isdarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
    }
  },[isdarkMode])
  return (
    <>
      <NavBar isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode} />
      <About isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode} />
      <Services isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode} />
      <Work isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode} />
      <Contact isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode} />
      <Footer isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode} />
    </>
  );
}
