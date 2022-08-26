import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CharacterList from './Characters/CharacterList';

// const [character, setCharacter] = useState([]);

function App() {
  return (
    <div>
      <Header />
      <main>
        <CharacterList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
