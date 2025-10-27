import { all_products } from "@/constants/products";

import ProjectImages from "@/components/project-images";
import Navbar from "@/components/navbar";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = all_products.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="bg-slate-800 min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Project not found</p>
      </main>
    );
  }

  return (
    <main className="bg-slate-800 min-h-screen text-white  flex items-center justify-center">
      <Navbar />
      <div className="container mx-auto px-4 py-8  z-10 max-w-4xl mt-14">
        {/* Carousel */}
        <div className="mb-8">
          {/* <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative  w-full h-[300px]">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
          <ProjectImages
            thumbnail={project.thumbnail}
            images={project.images}
            title={project.title}
          />
        </div>

        {/* Project Details */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{project.description}</p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          {project?.content && (
            <div className="prose prose-invert max-w-none">
              {project.content}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
