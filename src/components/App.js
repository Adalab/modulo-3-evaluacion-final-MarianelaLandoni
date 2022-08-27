import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import getDataApi from '../services/apiHp';
import Header from './Header';
import Footer from './Footer';
import CharacterList from './Characters/CharacterList';
import FilterByName from './Filters/FilterByName';

function App() {
  //---VARIABLES DE ESTADO---//
  const [characterData, setCharacter] = useState([]);
  const [searchName, setSearchName] = useState('');

  //---API---//

  useEffect(() => {
    getDataApi().then((data) => {
      // console.log(data); acordarme de quitarlo
      setCharacter(data);
    });
  }, []);

  //---FUNCIONES QUE EJECUTAN LAS HIJAS---//

  //Función para buscar por nombre//
  //Función que guarda el input de la usuaria

  const handleInputName = (value) => {
    setSearchName(value);
  };

  //Renderizar

  const renderCharacterFiltered = characterData.filter((eachCharacter) => {
    return eachCharacter.name
      .toLowerCase()
      .includes(searchName.toLocaleLowerCase());
  });

  return (
    <div>
      <Header />
      <main>
        <FilterByName
          inputValue={searchName}
          handleInputName={handleInputName}
        />
        <CharacterList characterData={renderCharacterFiltered} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
