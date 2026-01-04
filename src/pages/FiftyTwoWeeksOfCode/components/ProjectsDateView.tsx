import type { Project } from '@/types/fiftytwoweeksofcode';
import { Link } from "react-router-dom"


import { Calendar, Code2 } from "lucide-react";

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function ProjectsDateView({ projects }: { projects: Project[] }) {


    function getWeekDateRange(weekNumber: number): { start: Date; end: Date; label: string } {
        const startDate = new Date(2026, 0, 6); // January 6, 2026
        const weekStart = new Date(startDate);
        weekStart.setDate(startDate.getDate() + (weekNumber - 1) * 7);
        
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        
        const formatDate = (date: Date) => {
            const month = date.toLocaleDateString('en-US', { month: 'short' });
            const day = date.getDate();
            return `${month} ${day}`;
        };
        
        const label = `${formatDate(weekStart)} - ${formatDate(weekEnd)}`;
        
        return { start: weekStart, end: weekEnd, label };
    }

    const projectsByMonth = projects
        .sort((a, b) => a.week - b.week)
        .reduce((acc, project) => {
            const { start } = getWeekDateRange(project.week);
            const monthYear = start.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            
            if (!acc[monthYear]) {
                acc[monthYear] = [];
            }
            acc[monthYear].push(project);
            
            return acc;
        }, {} as Record<string, Project[]>);
        
    return (
        <>
            {Object.entries(projectsByMonth).map(([monthYear, monthProjects]) => (
                <div key={monthYear} className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-gray-600" />
                        {monthYear}
                    </h3>
                    <div className="space-y-4">
                        {monthProjects.map((project: Project, index: number) => {
                            const { label } = getWeekDateRange(project.week);
                            const slug = generateSlug(project.title);
                            return (
                                <Link key={index} to={`/52-weeks-of-code/projects/${slug}`} className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
                                    <div className="flex-shrink-0">
                                        {project.img ? (
                                            <img src={"assets/"+project.img} alt={project.title} className="w-48 h-48 object-cover rounded-md" />
                                        ) : (
                                            <div className="w-48 h-48 bg-gray-100 rounded-md flex items-center justify-center">
                                                <Code2 className="w-16 h-16 text-gray-400" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-sm font-semibold text-gray-900">Week {project.week}</span>
                                            <span className="text-sm text-gray-500">{label}</span>
                                        </div>
                                        <h4 className="text-base font-semibold text-gray-900 mb-1">{project.title}</h4>
                                        <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span className="px-2 py-1 rounded-full bg-gray-100">{project.theme}</span>
                                            {project.completed && (
                                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700">Completed</span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            ))}
        </>
    )
}