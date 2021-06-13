import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1>Portfolio Website</h1>
            <nav>
                <Link to='skillsandprojects'>Skills and Projects</Link>
                <Link to='contact'>Contact Me</Link>
            </nav>
        </div>
    )
}

export function SkillsAndProjects() {
    return (
        <div>
            <h1>Skills and Projects</h1>
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}

export function PageNotFound() {
    let location = useLocation();

    return (
        <h1>404: Page Not Found at {location.pathname}</h1>
    )
}