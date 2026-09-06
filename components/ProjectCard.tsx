interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}
    
export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
                <strong>Technologies:</strong>
                {technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 px-2 py-1 rounded">{tech}</span>
                ))}
            </div>
            {link && (
                <p className="mt-3">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">View Project</a>
                </p>
            )}
        </article>
    );
}




