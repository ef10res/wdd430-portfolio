import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/projects-db';

export default async function SchoolProjects() {
    const projects = await getProjects('school');

    return (
        <main>
            <h1>School Projects</h1>
            {projects.map((project: any) => (
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