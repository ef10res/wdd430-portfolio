import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: "Marathons",
    description: "A web application that allows users to view and register for marathons.",
    technologies: ["HTML", "CSS", "JavaScript", " APIs"],
    link: "https://github.com/ef10res/finalprojectwdd330.git"
  },
  {
    title: "Workout Tracker",
    description: "A web application that allows users to track their workouts and progress.",
    technologies: ["Python", "Firebase"],
    link: "https://github.com/ef10res/Cloud-Database-Firebase.git"
  }
];
export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-500">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
