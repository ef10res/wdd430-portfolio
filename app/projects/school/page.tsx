export default async function SchoolProjects() {
    const response = await fetch('http://localhost:3000/api/projects?type=school');
    const projects = await response.json();

    return (
        <main>
            <h1>School Projects</h1>
            {projects.map((project: any) => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </main>
    );
};