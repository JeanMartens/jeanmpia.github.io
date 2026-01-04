import challengeData from '@/data/challenge-data.json';
import type { Theme, Project } from '@/types/fiftytwoweeksofcode';

import ProjectCard from './components/ProjectCard'
import ProjectsDateView from './components/ProjectsDateView';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Pin } from 'lucide-react'
import { Gamepad2, Palette, Wrench, Cpu, Sparkles } from 'lucide-react';

const iconMap = { Gamepad2, Palette, Wrench, Cpu, Sparkles };


export default function FiftyTwoWeeksOfCode() {

    const themes: Theme[] = challengeData.themes;
    const projects: Project[] = challengeData.projects;

    const pinnedProjects = projects.filter(project => project.pinned)

    return (
        <div className="flex flex-col gap-8 p-6 w-full max-w-7xl mx-auto">
            {/* Page Header */}
            <header>
                <h1 className="text-3xl font-bold text-gray-900">52 Weeks of Code</h1>
                <p className="mt-2 text-gray-600">
                    A personal challenge to code every week for an entire year — tackling new problems,
                    learning technologies, and building projects.
                </p>
            </header>

            {/* Pinned Projects */}
            
            {pinnedProjects.length > 0 && (
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2 border-b pb-2">
                        <Pin className="w-4 h-4" /> Pinned Projects
                    </h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
                        {pinnedProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </section>
            )}
            
            {/* All Projects */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">All Projects</h2>

                <Tabs defaultValue="themes" className="w-full">
                    <TabsList>
                        <TabsTrigger value="themes">By Theme</TabsTrigger>
                        <TabsTrigger value="weeks">By Week</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="themes" className="space-y-6 mt-4">
                        {themes.map((theme, themeIndex) => {
                            const Icon = iconMap[theme.icon as keyof typeof iconMap];
                            
                            return (
                                <div key={themeIndex} className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                        {Icon && <Icon className="w-5 h-5 text-gray-600" />}
                                        {theme.name}
                                    </h3>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
                                        {projects
                                            .filter(project => project.theme === theme.name)
                                            .map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
                                    </div>
                                </div>
                            );
                        })}
                    </TabsContent>
                    <TabsContent value="weeks" className="mt-4 space-y-6">
                        <ProjectsDateView projects={projects} />
                    </TabsContent>
                </Tabs>
            </section>
        </div>
    )
}