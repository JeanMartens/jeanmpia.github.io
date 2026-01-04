export interface Theme {
    name: string;
    icon: string;
    description: string;
}

export interface Project {
    week: number;
    title: string;
    img?: string;
    slug?: string;
    theme: string;
    concept: string;
    description: string;
    engine?: string;
    engineNote?: string;
    githubLink?: string;
    link: string;
    completed: boolean;
    pinned: boolean;
}