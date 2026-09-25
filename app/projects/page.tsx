import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/projects-db';
export default async function ProjectsOverview() {
    const projects = await getProjects();
    
    return (
        <main>
            <h1>All Projects</h1>
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                />
            ))}
        </main>
    );
};