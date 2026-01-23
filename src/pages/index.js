import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";
import About from "@/components/About";
import ProjectsPage from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Dashboard/>
      <About/>
      <ProjectsPage/>
      <Skills/>
      <Gallery/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </>
  );
}
