// app/projects/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import ProjectsOverview from "./page";
import SchoolProjects from "./school/page";
import OpenSourceProjects from "./opensource/page";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <nav>
                <Link href="/projects">Overview</Link> | {' '}
                <Link href="/projects/opensource">Open Source</Link> | {' '}
                <Link href="/projects/school">School</Link>
            </nav>
            {children}
        </section>
    );
}