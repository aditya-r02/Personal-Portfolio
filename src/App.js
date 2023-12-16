import { useRef } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Homepage/Home';
import Project from './Projects/Project';
import Stack from './Stack/Stack';
import Contact from './Contact/Contact';

function App() {
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='flex flex-col items-center w-screen min-h-screen overflow-x-hidden font-calibri z-0'>
      <Navbar projectRef={projectRef} skillRef={skillRef} contactRef={contactRef}/>

      <Home contactRef={contactRef}/>

      <div ref={projectRef} className='w-full flex items-center justify-center bg-gray-100'>
        <Project/>
      </div>
      
      <div ref={skillRef} className='w-full items-center flex justify-center'>
        <Stack/>
      </div>
      
      <div ref={contactRef} className='w-full flex items-center justify-center'>
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
