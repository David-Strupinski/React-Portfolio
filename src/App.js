import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Skills, Projects, Contact, PageNotFound } from './pages';


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
        {/* <img src={profile} alt='Profile' width={100} /> */}
        <p>{data.name}</p>
        <p>{data.public_repos} public repos</p>
        <p>Created on {data.created_at}</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>About Me</h1>
        {/* <img src={profile} alt='Profile' width={100} /> */}
        <p>Placeholder text</p>
      </section>
    );
  }
}

const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

function App() {
  const [input, setInput] = useState('');

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact year={new Date().getFullYear()} setInput={setInput} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
