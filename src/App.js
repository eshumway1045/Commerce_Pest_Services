import React, { useState } from 'react';
import './App.css';
import Nav from './components/nav'
import Home from './components/home'
import ContactForm from './components/Contact';
import Termites from './components/Termites';
import Pests from './components/Pests';
import logo from "../src/logo.png";
import Footer from './components/Footer';
// import Footer from './components/Footer';

function App() {

  const [categories] = useState([
    {
      name: 'Home', description: 'Learn about me',
    },

    { name: 'Pests', description: 'Treated Pests' },
    { name: 'Termites', description: 'Termite Work' },
    { name: 'Contact', description: 'Send me a message' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [isSelected, setisSelected] = useState(false);

  return (
    <div className='center'>
      <h2 className='center'>
        <a href="/" className='module_2'>
          <img className='center, img_2' src={logo} alt="Commerce Pest Services logo"></img>
        </a>
      </h2>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        isSelected={isSelected}
        setisSelected={setisSelected}
      ></Nav>
      <main>
        {
          (currentCategory.name === 'Home') ?
            <Home></Home>
            : (currentCategory.name === 'Pests') ?
              <Pests></Pests>
              : (currentCategory.name === 'Termites') ?
                <Termites></Termites>
                : (currentCategory.name === 'Contact') ?
                  <ContactForm></ContactForm>
                  :
                  <Home></Home>
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;