import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import getDataApi from '../services/ApiHp';
import Header from './Header';
import Footer from './Footer';
import CharacterList from './Characters/CharacterList';

function App() {
  const [characterData, setCharacter] = useState([]);

  useEffect(() => {
    getDataApi().then((data) => {
      console.log(data);
      setCharacter(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <CharacterList characterData={characterData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
