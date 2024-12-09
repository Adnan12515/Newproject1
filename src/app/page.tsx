import Header from "@/components/Header"
import Hero from "@/components/Hero";
import About from "@/About/page";
import Foodcat from "@/components/Foodcat";
import Clients from "@/components/Clients";


export default function Home() {
  return (
  <div>       
    <Header />
    <Hero />
    <About />
    <Foodcat />
    <Clients />
    
  </div>
  );
}
