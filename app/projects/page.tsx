import Navbar from "@/components/navbar";
import { all_products } from "@/constants/products";
import ProjectsList from "@/sections/projects/projects-list";

export default async function ProjectDetailsPage() {
  return (
    <main className="bg-slate-800 min-h-screen text-white  flex items-center justify-center">
      <Navbar />
      <div className="container mx-auto px-4 py-8  z-10 max-w-4xl mt-14">
        <ProjectsList data={all_products} />
      </div>
    </main>
  );
}
