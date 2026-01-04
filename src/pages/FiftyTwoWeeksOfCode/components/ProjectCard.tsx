import defaultImage from "../../../assets/pixel-art-gear-with-clock-vector-icon-8bit-game-white-background_360488-878.avif";
import type { Project } from '@/types/fiftytwoweeksofcode';

import { Link } from "react-router-dom"; 

export default function ProjectCard({ ...project }: Project) {
  return (
    <Link
      to={`/52-weeks-of-code/projects/${project?.slug}`}
      className="group relative h-48 w-48 rounded-lg overflow-hidden ring-1 ring-gray-200 hover:shadow-lg transition-shadow block"
    >
      <img
        src={project.img ? project.img : defaultImage}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:blur-md group-hover:scale-105"
      />

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