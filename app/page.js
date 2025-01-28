import { CardGrid } from "@/components/CardGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import WorkExperience from "@/components/WorkExperience";
import { navItems } from "@/data";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full text-white mt-4 sm:mt-0">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <CardGrid />
        <RecentProjects />
        <WorkExperience />
        <Footer />
      </div>
    </main>
  );
}
