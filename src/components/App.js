import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import getDataApi from '../services/apiHp';
import Header from './Header';
import Footer from './Footer';
import CharacterList from './Characters/CharacterList';
import Filters from './Filters/Filters';
import CharacterDetail from './Characters/CharacterDetail';

function App() {
  //---VARIABLES DE ESTADO---//
  const [characterData, setCharacter] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchHouse, setSearchHouse] = useState('Gryffindor');

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

  const handleFilterHouse = (value) => {
    setSearchHouse(value);
  };

  //Renderizar

  const characterFiltered = characterData
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(searchName.toLocaleLowerCase());
    })

    .filter((eachCharacter) => {
      if (searchHouse === 'all') {
        return true;
      } else {
        return eachCharacter.house === searchHouse;
      }
    });

  //Si lo que pone la usuaria no coincide con ningun nombre, no se si va aqui o en otro sitio
  const characterNotFound = () => {
    if (searchName !== '' && characterFiltered.length === 0) {
      return <p>No hay ningún nombre que coincida con {searchName}</p>;
    }
  };

  //para coger el name del usuario, no hay id en el api
  const { pathname } = useLocation();
  console.log(pathname);
  const dataPath = matchPath('/character/:id', pathname);
  const characterId = dataPath !== null ? dataPath.params.id : null;
  const foundCharacters = characterData.find((item) => item.id === characterId);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  inputValue={searchName} //a inputValue mejor cambiarlo por searchName
                  handleInputName={handleInputName}
                  searchHouse={searchHouse}
                  handleFilterHouse={handleFilterHouse}
                />
                <CharacterList characterData={characterFiltered} />
              </>
            }
          />
          <Route
            path="/character/:id"
            element={
              <CharacterDetail
                characterData={characterData}
                foundCharacters={foundCharacters}
              />
            }
          />
        </Routes>
        {characterNotFound()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
