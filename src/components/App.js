import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Route, Routes } from 'react-router-dom';

import getDataApi from '../services/apiHp';
import ls from '../services/localStorage';
import Header from './Header';
import Footer from './Footer';
import CharacterList from './Characters/CharacterList';
import Filters from './Filters/Filters';
import CharacterDetail from './Characters/CharacterDetail';

console.log(ls); //QUITARLO

function App() {
  //---VARIABLES DE ESTADO---//
  const [characterData, setCharacter] = useState(ls.get('characterDataLS', []));
  const [searchName, setSearchName] = useState(ls.get('searchNameLS', ''));
  const [searchHouse, setSearchHouse] = useState(
    ls.get('searchHouseLS', 'Gryffindor')
  );

  //---API---//

  useEffect(() => {
    getDataApi().then((data) => {
      // console.log(data); acordarme de quitarlo
      setCharacter(data);
    });
  }, []);

  //--LOCAL STORAGE--//

  useEffect(() => {
    // Guardo los datos de los personajes en el local storage
    ls.set('characterDataLS', characterData);
    ls.set('searchNameLS', searchName);
    ls.set('searchHouseLS', searchHouse);

    // Este useEffect solo se ejecutará cuando cambie el nombre o el email
    console.log('Ha cambiado el nombre o el email');
  }, [characterData, searchName, searchHouse]);

  //---FUNCIONES QUE EJECUTAN LAS HIJAS---//

  //Función para buscar por nombre//
  //Función que guarda el input de la usuaria

  const handleInputName = (value) => {
    setSearchName(value);
  };

  const handleFilterHouse = (value) => {
    setSearchHouse(value);
  };

  const handleReset = () => {
    setSearchName('');
    setSearchHouse('Gryffindor');
    ls.clear();
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
      <main className="main">
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
                  handleReset={handleReset}
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
