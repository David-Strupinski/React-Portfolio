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
            <html src='../public/index.html'></html>
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

export function Contact(props) {
    function clearInput() {
        props.setInput('');
    }

    return (
        <footer>
            <h1>Contact</h1>
            <form>
                <input type='name' placeholder='Name' value={props.name} onChange={n => props.setName(n.target.value)} />
                <button onClick={clearInput}>Submit</button>
            </form>
            <p>&copy; {props.year}, David's Website</p>
        </footer>
    )
}

export function PageNotFound() {
    let location = useLocation();

    return (
        <h1>404: Page Not Found at {location.pathname}</h1>
    )
}