import challengeData from '@/data/challenge-data.json';
import type { Theme, Project } from '@/types/fiftytwoweeksofcode';

import ProjectCard from './components/ProjectCard'

import { Pin } from 'lucide-react'


export default function FiftyTwoWeeksOfCode() {

    const themes: Theme[] = challengeData.themes;
    const projects: Project[] = challengeData.projects;

    const pinnedProjects = projects.filter(project => project.pinned)

    return (
        <div className="flex flex-col gap-4 p-6 w-full max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold">52 Weeks of Code</h1>

            <div className='ring-1 ring-gray-200 rounded-md p-4 bg-blue-50'>
                <h3 className="text-2xl font-semibold text-gray-600">Project Overview</h3>
                <p className="mt-2 text-gray-700">
                    The "52 Weeks of Code" project is a personal challenge where I commit to coding
                    every week for an entire year. Each week, I tackle a new programming problem,
                    learn a new technology, or build a small project to enhance my coding skills and
                    broaden my knowledge in software development.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-gray-600"> <Pin className="inline-block" /> Pinned</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {pinnedProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>

            {themes.map((theme, themeIndex) => (
                <div key={themeIndex}>
                    <h3 className="text-xl font-semibold text-gray-600 mt-6">{theme.name}</h3>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
                        {projects
                            .filter(project => project.theme === theme.name)
                            .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                    </div>
                </div>
            ))}


            
        </div>
    )
}