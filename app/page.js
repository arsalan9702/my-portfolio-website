import { CardGrid, Card } from "@/components/CardGrid";
// import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full text-white mt-4 sm:mt-0">
        <FloatingNavbar navItems={[
          { name: "Home", link: "/", icon: <FaHome /> }
        ]} />
        <Hero />
        {/* <Grid /> */}
        
        {/* <CardGrid>
          <Card
            title="Card Title"
            description="This is a description of the card content."
            image=""
          />
          {/* Add more cards as needed */}
        {/* </CardGrid> */} 
        <CardGrid />
      </div>
    </main>
  );
}
