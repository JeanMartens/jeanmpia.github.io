import { Code2 } from "lucide-react";
import type { Project } from '@/types/fiftytwoweeksofcode';

import { Link } from "react-router-dom"; 


function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function ProjectCard({ ...project }: Project) {
  const slug = project.slug || generateSlug(project.title)
  
  return (
    <Link
        to={`/52-weeks-of-code/projects/${slug}`}
        className="group relative h-48 w-48 rounded-lg overflow-hidden ring-1 ring-gray-200 hover:shadow-lg transition-shadow block"
    >
        {project.img ? (
            <img
            src={`/assets/${project.img}`}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:blur-md group-hover:scale-105"
            />
        ) : (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-200">
            <Code2 className="h-16 w-16 text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-500" />
            </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-white border-t border-gray-200 flex items-center px-3 transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="text-sm font-semibold truncate">{project.title}</h3>
        </div>

        <div className="absolute inset-0 flex flex-col p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
            <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-white/90 line-clamp-4">{project.description}</p>
        </div>
    </Link>
    );
}