import ContactCard from "./ContactCard";

interface Contact {
    name: string;
    email: string;
    phoneNumber: string;
    technologies: string[];
}

interface ContactListProps {
    contacts: Contact[];
}

export default function ContactList({ contacts }: ContactListProps) {
    return (
        <section className="grid gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 p-4">
            {contacts.map((contact) => (
                <ContactCard
                    key={contact.name} {...contact} />
            ))}
        </section>
    );
}