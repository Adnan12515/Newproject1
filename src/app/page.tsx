import Hero from "@/components/Hero";
import Foodcat from "@/components/Foodcat";
import Clients from "@/components/Clients";
import About from "./About/page";
import { Contact } from "lucide-react";


export default function Home() {
  return (
  <div>       
    <Hero />
    <About />
   <Foodcat />
    <Clients />
    <Contact />
        
  </div>
  );
}
