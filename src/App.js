import profile from './profile.jpg';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, SkillsAndProjects, Contact, PageNotFound } from './pages';

function Title(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

function AboutMe({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <section>
        <h1>About Me</h1>
        <img src={profile} alt='Profile' width={100} />
        <p>{data.name}</p>
        <p>{data.public_repos} public repos</p>
        <p>Created on {data.created_at}</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>About Me</h1>
        <img src={profile} alt='Profile' width={100} />
        <p>Placeholder text</p>
      </section>
    );
  }
}

function Skills(props) {
  return (
    <section>
      <ul>
        {props.skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </section>
  );
}

function SecretAccess() {
  return (
    <h3>Welcome, David.</h3>
  )
}



function ContactMe(props) {
  function clearInput() {
    props.setName('');
  }

  return (
    <footer>
      <h1>Contact</h1>
      <form>
        <input type='name' placeholder='Name' value={props.name} onChange={n => props.setName(n.target.value)} />
        <button onClick={clearInput}>Submit</button>
      </form>

      <p>&copy; {props.year}, {props.name}'s Website</p>
    </footer>
  );
}

const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

function App() {
  const [name, setName] = useState('');

  return (
    <div className='App'>
      {/* <Title title='David Strupinski' />
      <AboutMe login="david-strupinski" />
      <Skills skills={skills} />
      {name === 'David' ? <SecretAccess /> : null}
      <Contact year={new Date().getFullYear()} name={name} setName={setName} /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skillsandprojects' element={<SkillsAndProjects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
