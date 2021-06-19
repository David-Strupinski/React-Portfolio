import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Home() {
    return (
        <>
            {Title('Portfolio Website')}
            {Navigation()}
            <div div id='aboutme'>
                <h2>About Me</h2>
                <div>
                    <img src='images/profile.jpg' alt='Profile Picture' style={{ height: '100px' }} />
                    <p>
                        I'm from Tacoma, Washington and a current freshman at the
                        University of Washington in Seattle. I currently have a 3.89
                        GPA and I am an intended Computer Science major.
                    </p>
                </div>
            </div>
        </>
    )
}

export function Skills() {
    return (
        <>
            {Title('Skills')}
            {Navigation()}
            <div id='skills'>
                <h2>Skills</h2>
                <ul>
                    <li>HTML <img src='images/green dot.png' alt='Green Dot' /></li>
                    <li>CSS <img src='images/green dot.png' alt='Green Dot' /></li>
                    <li>JavaScript <img src='images/yellow dot.png' alt='Yellow Dot' /></li>
                    <li>jQuery <img src='images/red dot.png' alt='Red Dot' /></li>
                    <li>React.js <img src='images/yellow dot.png' alt='Yellow Dot' /></li>
                    <li>React Native <img src='images/red dot.png' alt='Red Dot' /></li>
                    <li>Python <img src='images/yellow dot.png' alt='Yellow Dot' /></li>
                    <li>Java <img src='images/yellow dot.png' alt='Yellow Dot' /></li>
                    <li>R <img src='images/yellow dot.png' alt='Yellow Dot' /></li>
                    <li>Spanish <img src='images/yellow dot.png' alt='Yellow Dot' /></li>
                    <li>Microsoft Office Suite <img src='images/yellow dot.png' alt='Yellow Dot' /></li>
                </ul>
            </div>
        </>
    )
}

export function Projects() {
    return (
        <>
            {Title('Projects')}
            {Navigation()}
            <table id='projects'>
                <caption>Projects</caption>
                <tr>
                    <td class='name' id='porfolio'>Portfolio Website <br /><img src='images/portfolio.png' alt='Portfolio Site' />
                    </td>
                    <td class='desc'>I retaught myself web programming using the University of Washington library resources
                        and learned jQuery and React.js as well to improve this site. I made this website on my own and from
                        scratch applying what I learned.
                    </td>
                </tr>
                <tr>
                    <td class='name' id='spotify'>Spotify Assistant <br /><img src='images/spotify.png' alt='Spotify Assistant' />
                    </td>
                    <td class='desc'>Have you ever used Spotify and wished you could skip the ads without paying for premium?
                        This small program can do just that by tracking Spotify's PID and restarting it in a minimized form when
                        an ad is detected, then automatically resumes playing the music you love! (Note: Windows only;
                        deprecated from updates so the minimize function does not work properly anymore)
                    </td>
                </tr>
                <tr>
                    <td class='name' id='grading'>Grading Helper <br /><img src='images/apple.png' alt='Apple' /></td>
                    <td class='desc'>Near the end of the year in my AP Computer Science class in high school, a classmate and I
                        created a mobile application for both iOS and Android that allowed teachers to quickly grade a mass
                        amount of papers by calculating percentages and scores for an entire assignment. The result was
                        outputted in a list format to allow for all possibilities to be seen at once.
                    </td>
                </tr>
            </table>
        </>
    )
}


export function Contact(props) {
    function clearInput() {
        props.setInput('');
    }

    return (
        <>
            {Title('Contact')}
            {Navigation()}
            <form id='contact'>
                <fieldset>
                    <h1>Contact</h1>
                    <p>
                        Have a message for me? Or <a href='mailto:david.strupinski@gmail.com'>Email Directly</a>
                    </p>
                    <div class='input-align'>
                        <input type='name' name='name' id='name' placeholder='Name' value={props.name} onChange={n => props.setName(n.target.value)} />
                        <input type='email' name='email' id='email' placeholder='Email' />
                        <textarea type='text' name='message' id='message' placeholder='Message' rows='4' required></textarea>
                        <button type='button' name='submit' id='submit' onClick={clearInput}>Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export function PageNotFound() {
    let location = useLocation();

    return (
        <>
            {Navigation()}
            <h1> 404: Page Not Found at {location.pathname}</h1>
        </>
    )
}

function Navigation() {
    return (
        <nav id='main-navbar'>
            <Link to='/'>Home</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact Me</Link>
        </nav>
    )
}

function Title(name) {
    return (
        <div className='title-box'>
            <h1>{name}</h1>
            <small>By David Strupinski</small>
        </div>
    )
}