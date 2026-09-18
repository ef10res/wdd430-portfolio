export default async function ProjectsOverview() {
    const response = await fetch('http://localhost:3000/api/projects');

    const projects = await response.json();
    
    return (
        <main>
            <h1>All Projects</h1>
            {projects.map((project: any) => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </main>
    );
};