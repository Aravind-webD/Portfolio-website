import Image from "next/image";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import AboutSection from "./Component/AboutSection";
import ProjectsSection from "./Component/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div class="container mt-24 mx-auto px-12 py-4 ">
       <HeroSection />
       <br>
       </br>
       <br>
       </br>
       <AboutSection />
       <br>
       </br>
       <br>
       </br>
       <ProjectsSection/>
    </div>
    </main>
  );
}
