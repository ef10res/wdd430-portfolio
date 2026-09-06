interface ContactCardProps {
    name: string;
    email: string;
    phoneNumber: string;
    technologies: string[];
}

export default function ContactCard({ name, email, phoneNumber, technologies }: ContactCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-950 mb-2">{name}</h3>
            <p className="text-gray-900 mb-2">Email: {email}</p>
            <p className="text-gray-900 mb-2">Phone: {phoneNumber}</p>  
            <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
                <strong>Technologies:</strong>
                {technologies.map((tech) => (
                    <span key={tech} className="bg-gray-300 px-2 py-1 rounded">{tech}</span>
                ))}
            </div>
        </div>
    );
}
        