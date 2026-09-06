import Contact from "@/components/Contact";
const contacts = [
    {
        name: "Erick Flores",
        email: "floreserick10@gmail.com",
        phoneNumber: "801-200-7610",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Python", "Firebase", "SQL", "Node.js", "Express"]
    }
];

export default function About() {
    return (
        <main className="container mx-auto min-h-screen py-8">
            <section className="mx-auto max-w-3xl p-4">
                <h2 className="mb-4 text-3xl font-bold">About Me</h2>
                <p className="text-lg text-gray-700">
                    This about page shows more information about my background, skills, and work.
                </p>
            </section>
            <Contact contacts={contacts} />
        </main>
    );
}