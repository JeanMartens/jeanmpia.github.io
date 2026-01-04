import { useParams, Link } from 'react-router-dom'


import challengeData from '@/data/challenge-data.json'
import type { Project } from '@/types/fiftytwoweeksofcode'
import { Badge } from '@/components/ui/badge'

import { ArrowLeft, ExternalLink, CheckCircle, Circle, Pin } from 'lucide-react'

function generateSlug(title: string): string {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function ProjectPage() {
    const { projectSlug } = useParams<{ projectSlug: string }>()
    
    const projects: Project[] = challengeData.projects
    const project = projects.find(p => 
        (p.slug && p.slug === projectSlug) || generateSlug(p.title) === projectSlug
    )

    if (!project) {
        return (
            <div className="flex flex-col gap-8 p-6 w-full max-w-7xl mx-auto">
                <Link to="/52-weeks-of-code" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ArrowLeft size={16} /> Back to projects
                </Link>
                <h1 className="text-3xl font-bold text-red-600">Project not found</h1>
                <p className="text-gray-600">The project you're looking for doesn't exist.</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-8 p-6 w-full max-w-7xl mx-auto">
            <Link to="/52-weeks-of-code" className="flex items-center gap-2 text-blue-600 hover:underline w-fit">
                <ArrowLeft size={16} /> Back to projects
            </Link>

            <div className="flex items-center gap-2">
                <Badge variant="default">
                    Week {project.week}
                </Badge>
                <Badge variant="secondary">
                    {project.theme}
                </Badge>
                {project.completed ? (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                        <CheckCircle size={16} className='pr-1' /> Completed
                    </Badge>
                ) : (
                    <Badge variant="outline" className="text-gray-400">
                        <Circle size={16} className='pr-1' /> Not completed yet
                    </Badge>
                )}
                {project.pinned && (
                    <Badge variant="outline">
                        <Pin size={16} className='pr-1' /> Pinned
                    </Badge>
                )}
                {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Badge variant="outline">
                            <ExternalLink size={16} className='pr-1' /> GitHub
                        </Badge>
                    </a>
                )}
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Badge variant="outline">
                            <ExternalLink size={16} className='pr-1' /> Live Demo
                        </Badge>
                    </a>
                )}

            </div>

            <h1 className="text-4xl font-bold">{project.title}</h1>

            {/* Project Image */}
            {project.img && (
                <div className="w-full rounded-lg overflow-hidden ring-1 ring-gray-200">
                    <img 
                        src={`/assets/${project.img}`}
                        alt={project.title}
                        className="w-full h-auto object-cover max-h-96"
                    />
                </div>
            )}

            <div className="ring-1 ring-gray-200 rounded-lg p-6 bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Concept learnt</h2>
                <p className="text-gray-600">{project.concept}</p>
            </div>

                        
            {project.engine && (
                <div className="text-sm text-gray-500">
                    <p><span className="font-semibold">Engine:</span> {project.engine}</p>
                    {project.engineNote && (
                        <p className="italic mt-1">{project.engineNote}</p>
                    )}
                </div>
            )}


            <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Instructions:</h2>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>

            {project.link && (
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline w-fit"
                >
                    <ExternalLink size={16} /> View Project
                </a>
            )}
        </div>
    )
}